import { database } from "../../firebase";
import {
  ref,
  push,
  set,
  remove,
  get,
  update,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

// 1️⃣ CREATE new quiz (Public/Private)
export async function createQuiz(userId, quizData) {
  try {
    // Create quiz in main quizzes collection
    const quizzesRef = ref(database, "quizzes");
    const newQuizRef = push(quizzesRef);
    const quizId = newQuizRef.key;

    const quizWithMetadata = {
      ...quizData,
      quizId: quizId,
      createdBy: userId,
      createdAt: new Date().toISOString(),
      isPublic: quizData.isPublic || false, // Default to private
    };

    // Save quiz
    await set(newQuizRef, quizWithMetadata);

    // Add quiz to user's myQuizzes
    const userQuizRef = ref(database, `users/${userId}/myQuizzes/${quizId}`);
    await set(userQuizRef, true);

    return quizId;
  } catch (error) {
    console.error("Error creating quiz:", error);
    throw error;
  }
}

// 2️⃣ GET PUBLIC quizzes (no login needed)
export async function getPublicQuizzes() {
  try {
    const quizzesRef = ref(database, "quizzes");
    const publicQuizzesQuery = query(
      quizzesRef,
      orderByChild("isPublic"),
      equalTo(true),
    );

    const snapshot = await get(publicQuizzesQuery);

    if (snapshot.exists()) {
      const quizzes = [];
      snapshot.forEach((childSnapshot) => {
        const quiz = childSnapshot.val();
        // Don't show createdBy for public quizzes (privacy)
        const { createdBy, ...publicQuiz } = quiz;
        quizzes.push(publicQuiz);
      });
      return quizzes;
    }
    return [];
  } catch (error) {
    console.error("Error getting public quizzes:", error);
    throw error;
  }
}

// 3️⃣ GET user's own quizzes (private + public)
export async function getUserQuizzes(userId) {
  try {
    const userQuizzesRef = ref(database, `users/${userId}/myQuizzes`);
    const snapshot = await get(userQuizzesRef);

    if (snapshot.exists()) {
      const quizIds = Object.keys(snapshot.val());
      const quizzes = [];

      // Get each quiz details
      for (const quizId of quizIds) {
        const quizRef = ref(database, `quizzes/${quizId}`);
        const quizSnapshot = await get(quizRef);

        if (quizSnapshot.exists()) {
          quizzes.push({
            id: quizId,
            ...quizSnapshot.val(),
          });
        }
      }

      return quizzes;
    }
    return [];
  } catch (error) {
    console.error("Error getting user quizzes:", error);
    throw error;
  }
}

// 4️⃣ GET single quiz (check if accessible)
export async function getQuiz(quizId, userId = null) {
  try {
    const quizRef = ref(database, `quizzes/${quizId}`);
    const snapshot = await get(quizRef);

    if (!snapshot.exists()) {
      throw new Error("Quiz not found");
    }

    const quiz = snapshot.val();

    // Check access
    if (!quiz.isPublic && (!userId || quiz.createdBy !== userId)) {
      throw new Error("Private quiz - Access denied");
    }

    return quiz;
  } catch (error) {
    console.error("Error getting quiz:", error);
    throw error;
  }
}

// 5️⃣ UPDATE quiz privacy
export async function updateQuizPrivacy(userId, quizId, isPublic) {
  try {
    // Verify ownership
    const quizRef = ref(database, `quizzes/${quizId}`);
    const snapshot = await get(quizRef);

    if (!snapshot.exists() || snapshot.val().createdBy !== userId) {
      throw new Error("Not authorized");
    }

    // Update privacy
    await update(quizRef, { isPublic });

    return true;
  } catch (error) {
    console.error("Error updating privacy:", error);
    throw error;
  }
}

// 6️⃣ DELETE quiz
export async function deleteQuiz(userId, quizId) {
  try {
    // Verify ownership
    const quizRef = ref(database, `quizzes/${quizId}`);
    const snapshot = await get(quizRef);

    if (!snapshot.exists() || snapshot.val().createdBy !== userId) {
      throw new Error("Not authorized");
    }

    // Remove from quizzes
    await remove(quizRef);

    // Remove from user's myQuizzes
    const userQuizRef = ref(database, `users/${userId}/myQuizzes/${quizId}`);
    await remove(userQuizRef);

    return true;
  } catch (error) {
    console.error("Error deleting quiz:", error);
    throw error;
  }
}

// 7️⃣ SEARCH public quizzes by title
export async function searchPublicQuizzes(searchTerm) {
  try {
    const allPublic = await getPublicQuizzes();
    return allPublic.filter(
      (quiz) =>
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  } catch (error) {
    console.error("Error searching quizzes:", error);
    return [];
  }
}
