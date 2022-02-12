import React from "react";
import { motion } from "framer-motion";
import "../App.css";
function GameItem({ game }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{game.name}</h2>
      <div className="platforms">
        {game.parent_platforms.map((platform) => (
          <span>{platform.platform.name}</span>
        ))}
      </div>
      <img src={game.background_image} alt={game.name} />
    </motion.div>
  );
}

export default GameItem;
