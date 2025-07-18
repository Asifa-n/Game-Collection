// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-xl px-3 py-1 rounded border dark:border-white border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;



