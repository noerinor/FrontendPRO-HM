import "./App.css";

import React from "react";

class EmojiVoting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: [
        { id: 1, emoji: "😃", votes: 5 },
        { id: 2, emoji: "😊", votes: 7 },
        { id: 3, emoji: "😎", votes: 11 },
        { id: 4, emoji: "🤩", votes: 6 },
        { id: 5, emoji: "😍", votes: 3 },
      ],
      showResults: false,
      winner: null,
    };
  }

  componentDidMount() {
    const savedVotes = localStorage.getItem("emojiVotes");

    if (savedVotes) {
      this.setState({ emojis: JSON.parse(savedVotes) });
    }
  }

  // обробляє голос за конкретний емоджі
  handleVote = (id) => {
    // оновлення стану
    this.setState(
      (prevState) => ({
        emojis: prevState.emojis.map((emoji) =>
          emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
        ),
      }),
      () => {
        // збереження оновленого стану
        localStorage.setItem("emojiVotes", JSON.stringify(this.state.emojis));
      }
    );
  };

  //відображає результати голосування
  showResults = () => {
    // отримання переможця
    const winner = this.state.emojis.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );
    // оновлення стану
    this.setState({ showResults: true, winner });
  };

  // очищає результати голосування
  clearResults = () => {
    // оновлення стану
    this.setState(
      {
        emojis: this.state.emojis.map((emoji) => ({ ...emoji, votes: 0 })),
        showResults: false,
        winner: null,
      },
      () => {
        // видалення збережених голосів
        localStorage.removeItem("emojiVotes");
      }
    );
  };

  // візуальний інтерфейс компонента
  render() {
    return (
      <div>
        <h1>Голосування за найкращий смайлик</h1>
        <div>
          {this.state.emojis.map((emoji) => (
            <button key={emoji.id} onClick={() => this.handleVote(emoji.id)}>
              {emoji.emoji} {emoji.votes}
            </button>
          ))}
        </div>
        <button onClick={this.showResults}>Показати результати</button>
        <button onClick={this.clearResults}>Очистити результати</button>

        {this.state.showResults && (
          <div>
            <h2 className="winner">Переможець:</h2>
            <p className="winner">
              {this.state.winner.emoji} (Кількість голосів:{" "}
              {this.state.winner.votes})
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiVoting;
