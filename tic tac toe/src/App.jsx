import { useState } from 'react';
import {
  SquareButton,
  Status,
  BoardRow,
  GameContainer,
  GameBoard,
  GameInfo,
  MoveButton,
  GameWrapper,
  GameTitle,
} from './styles';

function Square({ value, onSquareClick }) {
  return (
    <SquareButton onClick={onSquareClick}>
      {value}
    </SquareButton>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const { winner, isDraw } = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Победитель: ' + winner;
  } else if (isDraw) {
    status = 'Ничья!';
  } else {
    status = 'Следующий игрок: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <Status>{status}</Status>
      {[0, 1, 2].map((row) => (
        <BoardRow key={row}>
          {[0, 1, 2].map((col) => (
            <Square 
              key={col} 
              value={squares[row * 3 + col]} 
              onSquareClick={() => handleClick(row * 3 + col)} 
            />
          ))}
        </BoardRow>
      ))}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => (
    <li key={move}>
      <MoveButton onClick={() => jumpTo(move)}>
        {move ? `Перейти к ходу #${move}` : 'Начать заново'}
      </MoveButton>
    </li>
  ));

  return (
    <GameWrapper>
      <GameTitle>Крестики-нолики</GameTitle>
      <GameContainer>
        <GameBoard>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </GameBoard>
        <GameInfo>
          <ol>{moves}</ol>
        </GameInfo>
      </GameContainer>
    </GameWrapper>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], isDraw: false };
    }
  }

  const isDraw = squares.every(square => square !== null);
  return { winner: null, isDraw };
}