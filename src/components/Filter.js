import React, { useEffect } from "react";
import "./filter.css";
function Filter({ setActiveGenre, activeGenre, setFilteredGames, games }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilteredGames(games);
      return;
    }

    const filtered = games.filter((game) => {
      let gameMatched;
      for (let i = 0; i < game.genres.length; i++) {
        if (game.genres[i].id === activeGenre) {
          gameMatched = game;
        }
      }
      return gameMatched;
    });

    setFilteredGames(filtered);
  }, [activeGenre, games]);

  return (
    <div className="button-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 4 ? "active" : ""}
        onClick={() => setActiveGenre(4)}
      >
        Action
      </button>
      <button
        className={activeGenre === 5 ? "active" : ""}
        onClick={() => setActiveGenre(5)}
      >
        RPG
      </button>
      <button
        className={activeGenre === 3 ? "active" : ""}
        onClick={() => setActiveGenre(3)}
      >
        Adventure
      </button>

      <button
        className={activeGenre === 1 ? "active" : ""}
        onClick={() => setActiveGenre(1)}
      >
        Racing
      </button>

      <button
        className={activeGenre === 2 ? "active" : ""}
        onClick={() => setActiveGenre(2)}
      >
        Shooter
      </button>
    </div>
  );
}

export default Filter;
