import { useNavigate } from "react-router-dom";

const colors = [
  "bg-gradient-to-br from-green-100 to-green-200",
  "bg-gradient-to-br from-purple-100 to-purple-200",
  "bg-gradient-to-br from-yellow-100 to-yellow-200",
  "bg-gradient-to-br from-pink-100 to-pink-200",
  "bg-gradient-to-br from-blue-100 to-blue-200",
  "bg-gradient-to-br from-red-100 to-red-200",
];

function GameCard({ game, onDelete }) {
  const navigate = useNavigate();
  const colorClass = colors[game.id % colors.length];

  return (
    <div
      className={`p-6 shadow-lg rounded-3xl ${colorClass} dark:bg-gray-800 dark:text-white`}
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{game.title}</h2>
      <p><strong>🎮 Genre:</strong> {game.genre}</p>
      <p><strong>🖥️ Platform:</strong> {game.platform}</p>
      <p><strong>🏢 Developer:</strong> {game.developer}</p>
      <p><strong>📆 Year:</strong> {game.release_year}</p>
      <p><strong>⭐ Rating:</strong> {game.rating}</p>

      <div className="mt-4 flex flex-wrap gap-4">
        <button
          onClick={() => navigate(`/edit/${game.id}`)}
          className="bg-white dark:bg-gray-700 text-purple-700 dark:text-purple-300 border border-purple-500 px-4 py-1 rounded-lg shadow hover:bg-purple-100 dark:hover:bg-purple-900 transition"
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => onDelete(game.id)}
          className="bg-white dark:bg-gray-700 text-red-700 dark:text-red-300 border border-red-500 px-4 py-1 rounded-lg shadow hover:bg-red-100 dark:hover:bg-red-900 transition"
        >
          🗑️ Delete
        </button>

        {game.link && (
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-700 text-green-700 dark:text-green-300 border border-green-500 px-4 py-1 rounded-lg shadow hover:bg-green-100 dark:hover:bg-green-900 transition"
          >
            🎮 Play Now
          </a>
        )}
      </div>
    </div>
  );
}

export default GameCard;





