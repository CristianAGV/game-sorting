import "./App.css";
import React, { useEffect, useState } from "react";
import GameItem from "./components/GameItem";
import { FaSpinner } from "react-icons/fa";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  const [games, setGames] = useState([]);
  const [isWaiting, setIsWaiting] = useState(true);
  const [filteredGames, setFilteredGames] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  let content = "";

  useEffect(() => {
    fetchApi();
    setTimeout(() => {
      setIsWaiting(false);
    }, 3000);
    // return clearTimeout(timer);
  }, []);

  const fetchApi = async () => {
    try {
      let response = await fetch(
        "https://api.rawg.io/api/games?key=9834d92e43434ea9b9aafbdb271f250c&page=1&page_size=25"
      );
      let data = await response.json();
      setGames(data.results);
      setFilteredGames(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  if (isWaiting) {
    content = (
      <div className="charging-layout">
        <FaSpinner className="spinner" />
      </div>
    );
  }

  return (
    <div className="App">
      {isWaiting && content}
      {!isWaiting && (
        <>
          <Filter
            games={games}
            setFilteredGames={setFilteredGames}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <motion.div layout className="movies-container">
            <AnimatePresence>
              {filteredGames.map((game) => (
                <GameItem key={game.id} game={game} />
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;
