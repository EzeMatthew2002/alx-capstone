import React, { useState, useEffect } from "react";

function QuizStart({ onStart }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(5);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories || []));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) return alert("Please select a category");
    onStart({ category, difficulty, amount });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Start Your Quiz
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category selection */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty selection */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Number of questions */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Number of Questions
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Start button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuizStart;
