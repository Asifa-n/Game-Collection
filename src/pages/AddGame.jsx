import { useNavigate } from "react-router-dom";
import GameForm from "../components/GameForm";

function AddGame() {
  const navigate = useNavigate();

  const handleAdd = (game) => {
    const existing = JSON.parse(localStorage.getItem("games")) || [];
    const updated = [...existing, { ...game, id: Date.now() }];
    localStorage.setItem("games", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <GameForm onAdd={handleAdd} />
    </div>
  );
}

export default AddGame;
