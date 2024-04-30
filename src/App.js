import { useEffect, useState } from 'react';
import Square from './components/square';
import './App.css';
import { patterns } from './components/patterns';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('O');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  useEffect(() => {
    checkWin();
    checkIfDraw();
    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  }, [board]);

  useEffect(() => {
    if (result.winner !== 'none') {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      ResetGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === '') {
          return player;
        }
        return val;
      })
    );
  };

  const checkWin = () => {
    patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === '') return;
      let FoundWinner = true;
      currentPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          FoundWinner = false;
        }
      });
      if (FoundWinner) {
        setResult({ winner: player, state: 'Won' });
      }
    });
  };

  const checkIfDraw = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === '') {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: 'No One', state: 'Draw' });
    }
  };

  const ResetGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('O');
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
