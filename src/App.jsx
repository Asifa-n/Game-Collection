import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import AddGame from './pages/AddGame';
import EditGame from "./pages/EditGame";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white">
        <nav className="w-full bg-white dark:bg-gray-800 shadow mb-8">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bebas tracking-widest text-red-700 dark:text-white drop-shadow-md">
              GAME-COLLECTION
            </h1>

            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-blue-600 dark:text-blue-300 hover:text-blue-800 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/add"
                className="text-blue-600 dark:text-blue-300 hover:text-blue-800 font-medium transition-colors"
              >
                Add Games
              </Link>

              {/* 🌗 Theme Toggle Button */}
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <main className="flex-1 flex justify-center items-start">
          <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow p-8 mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddGame />} />
              <Route path="/edit/:id" element={<EditGame />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

