import { useState } from "react";

function GameForm({ onAdd, initialData = {} }) {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    platform: "",
    developer: "",
    release_year: "",
    rating: "",
    link: "",
    ...initialData,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.genre) {
      alert("Please fill in required fields.");
      return;
    }
    onAdd(form);
    if (!initialData.title) {
      setForm({
        title: "",
        genre: "",
        platform: "",
        developer: "",
        release_year: "",
        rating: "",
        link: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl mx-auto space-y-4 dark:bg-gray-800 dark:text-white"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white mb-4">
        {initialData.title ? "Edit Game" : "Add New Game"}
      </h2>

      {["title", "genre", "platform", "developer", "release_year", "rating", "link"].map((field) => (
        <input
          key={field}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name={field}
          placeholder={field.replace("_", " ").toUpperCase()}
          value={form[field]}
          onChange={handleChange}
        />
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {initialData.title ? "Update Game" : "Add Game"}
      </button>
    </form>
  );
}

export default GameForm;

