import React from 'react';
import './App.css';
import {TicTacToe} from "./tictactoe"
const ttt= new TicTacToe
const App: React.FC = () => {
  return (
    <div className="App">
    Active player {ttt.activePlayer}
    <table className="pepe">
      {ttt.field.map((row: any, rowIndex: number) => <tr>
        {row.map((_cell: any, cellIndex: number) => <td onClick={() => {ttt.clickHandler(rowIndex, cellIndex)}}>
          {ttt.field[rowIndex][cellIndex]}
        </td>)}
      </tr>)}
    </table>
    {ttt.checkWin(ttt.field)?<h1>Winner {ttt.activePlayer}</h1>:""}
    {ttt.checkWin(ttt.field)?<button onClick={() => ttt.reset()}>Reset</button>:""}
  </div>
  );
}

export default App;
