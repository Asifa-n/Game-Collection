import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameForm from "../components/GameForm";

function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gameToEdit, setGameToEdit] = useState(null);

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem("games")) || [];
    const foundGame = savedGames.find((game) => String(game.id) === id);
    if (foundGame) {
      setGameToEdit(foundGame);
    } else {
      alert("Game not found!");
      navigate("/");
    }
  }, [id, navigate]);

  const handleUpdate = (updatedGame) => {
    const savedGames = JSON.parse(localStorage.getItem("games")) || [];
    const newGames = savedGames.map((game) =>
      String(game.id) === id ? { ...updatedGame, id: game.id } : game
    );
    localStorage.setItem("games", JSON.stringify(newGames));
    navigate("/");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {gameToEdit && <GameForm onAdd={handleUpdate} initialData={gameToEdit} />}
    </div>
  );
}

export default EditGame;

