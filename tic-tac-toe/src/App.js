import React, { useState } from "react";
import "./App.css";

function Square({ value, onClick }) {
  return (
    <button class="square" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);

  const handle = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xNext ? "X" : "O";
    setSquares(nextSquares);
    setXNext(!xNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xNext ? "X" : "O");

  return (
    <div class="game">
      <h1>Tic Tac Toe</h1>
      <div class="status">{status}</div>
      <div class="board">
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => handle(i)} />
        ))}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
