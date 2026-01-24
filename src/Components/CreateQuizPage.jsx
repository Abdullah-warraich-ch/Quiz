import React from "react";

function CreateQuizPage() {
  const [info, setInfo] = React.useState(true);
  const [questions, setQuestions] = React.useState(false);
  return (
    <div className="flex flex-col max-w-[90%] md:max-w-[30%] m-auto h-auto py-20 gap-8">
      {info && (
        <div>
          <h2 className="text-center font-bold text-5xl">Details About Quiz</h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Quiz Title"
              className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="text"
              placeholder="Quiz Description"
              className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <div className="flex flex-col gap-3">
              <label className="text-lg font-medium text-white">
                Visibility
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer text-white">
                  <input
                    type="radio"
                    name="visibility"
                    value="public"
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 border-white/20 rounded-full flex items-center justify-center peer-checked:border-white peer-checked:bg-white/20 transition-all">
                    <span className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></span>
                  </span>
                  Public
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-white">
                  <input
                    type="radio"
                    name="visibility"
                    value="private"
                    className="peer hidden"
                  />
                  <span className="w-5 h-5 border-2 border-white/20 rounded-full flex items-center justify-center peer-checked:border-white peer-checked:bg-white/20 transition-all">
                    <span className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></span>
                  </span>
                  Private
                </label>
              </div>
            </div>
            <select
              name="topic"
              id="topic"
              className="w-full border border-white/20 p-4 rounded-2xl bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <option value="html" className="bg-gray-800 text-white">
                HTML
              </option>
              <option value="css" className="bg-gray-800 text-white">
                CSS
              </option>
              <option value="javascript" className="bg-gray-800 text-white">
                JavaScript
              </option>
              <option value="sql" className="bg-gray-800 text-white">
                SQL
              </option>
              <option value="php" className="bg-gray-800 text-white">
                PHP
              </option>
              <option value="react" className="bg-gray-800 text-white">
                React
              </option>
              <option value="nodejs" className="bg-gray-800 text-white">
                NodeJS
              </option>
              <option value="mongodb" className="bg-gray-800 text-white">
                MongoDB
              </option>
              <option value="api" className="bg-gray-800 text-white">
                API
              </option>
              <option value="testing" className="bg-gray-800 text-white">
                Testing
              </option>
              <option value="devops" className="bg-gray-800 text-white">
                DevOps
              </option>
              <option value="security" className="bg-gray-800 text-white">
                Security
              </option>
            </select>
            <button
              type="submit"
              className="text-white bg-white/20 text-lg font-bold px-4 py-3 rounded-xl border border-white/20 hover:bg-white/30 hover:border-white/30 transition-all"
            >
              Create Quiz
            </button>
          </form>
        </div>
      )}
      {questions && <div>Create Quiz Questions Page</div>}
    </div>
  );
}

export default CreateQuizPage;
