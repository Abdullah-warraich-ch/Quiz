import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebase";
import { FaGoogle } from "react-icons/fa";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const Navigate = useNavigate();
  async function signinwithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message);
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // User signed up successfully

      setSuccessMessage("Sign up successful!");
      setTimeout(() => {
        Navigate("/signin");
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
        setError(err.message);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col max-w-[90%] md:max-w-[30%] m-auto h-auto  py-20 gap-8">
      <h2 className="text-center font-bold text-5xl">Sign Up</h2>
      <form onSubmit={handleSignUp} className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-white/20 p-4 rounded-2xl "
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-white/20 p-4 rounded-2xl"
        />
        <button
          type="submit"
          className="text-white  bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border-0.5 border-white/20 hover:bg-white/20"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <button
        onClick={signinwithGoogle}
        className="flex justify-center items-center gap-4 border border-white/20 p-4 rounded-2xl text-lg"
      >
        <FaGoogle /> Sign Up with Google
      </button>
    </div>
  );
};
export default SignUp;
