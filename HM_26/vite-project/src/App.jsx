import "./App.css";

import React, { useState, useEffect } from "react";

const EmojiVoting = () => {
  const [emojis, setEmojis] = useState([
    { id: 1, emoji: "😃", votes: 5 },
    { id: 2, emoji: "😊", votes: 7 },
    { id: 3, emoji: "😎", votes: 11 },
    { id: 4, emoji: "🤩", votes: 6 },
    { id: 5, emoji: "😍", votes: 3 },
  ]);

  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const savedVotes = localStorage.getItem("emojiVotes");
    if (savedVotes) {
      setEmojis(JSON.parse(savedVotes));
    }
  }, []);

  const handleVote = (id) => {
    const updatedEmojis = emojis.map((emoji) =>
      emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
    );
    setEmojis(updatedEmojis);
    localStorage.setItem("emojiVotes", JSON.stringify(updatedEmojis));
  };

  const showResultsFunc = () => {
    const winnerEmoji = emojis.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );
    setWinner(winnerEmoji);
    setShowResults(true);
  };

  const clearResults = () => {
    const resetEmojis = emojis.map((emoji) => ({ ...emoji, votes: 0 }));
    setEmojis(resetEmojis);
    setShowResults(false);
    setWinner(null);
    localStorage.removeItem("emojiVotes");
  };

  return (
    <div>
      <h1>Голосування за найкращий смайлик</h1>
      <div>
        {emojis.map((emoji) => (
          <button key={emoji.id} onClick={() => handleVote(emoji.id)}>
            {emoji.emoji} {emoji.votes}
          </button>
        ))}
      </div>
      <button onClick={showResultsFunc}>Показати результати</button>
      <button onClick={clearResults}>Очистити результати</button>

      {showResults && winner && (
        <div>
          <h2 className="winner">Переможець:</h2>
          <p className="winner">
            {winner.emoji} (Кількість голосів: {winner.votes})
          </p>
        </div>
      )}
    </div>
  );
};

export default EmojiVoting;
