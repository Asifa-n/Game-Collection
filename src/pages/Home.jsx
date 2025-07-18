import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("games")) || [];
    setGames(stored);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this game?");
    if (!confirmDelete) return;

    const updated = games.filter((game) => game.id !== id);
    setGames(updated);
    localStorage.setItem("games", JSON.stringify(updated));
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bebas text-purple-800 dark:text-purple-300 drop-shadow-md">
          🎮 Welcome to the Game Vault
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 italic mt-2">
          Unlock legendary titles. Relive epic moments.
        </p>
      </header>

      {games.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">No games found. Add some!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;




