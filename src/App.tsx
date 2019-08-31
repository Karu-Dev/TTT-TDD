import React, { useState } from 'react';
import './App.css';
import {TicTacToe} from "./tictactoe"
const ttt= new TicTacToe()
const App: React.FC = () => {
  const [field, setField] = useState(ttt.genField())
  return (
    <div className="App">
    Active player {ttt.activePlayer}
    <table className="pepe">
      {field.map((row: any, rowIndex: number) => <tr>
        {row.map((_cell: any, cellIndex: number) => <td onClick={() => {
          ttt.setField(field)
          setField(ttt.clickHandler(cellIndex, rowIndex))}}>
          {field[rowIndex][cellIndex]}
        </td>)}
      </tr>)}
    </table>
    {ttt.checkWin(field)?<h1>Winner {ttt.activePlayer}</h1>:""}
    {ttt.checkWin(field)?<button onClick={() => {
      
      ttt.reset()
      }}>Reset</button>:""}
  </div>
  );
}

export default App;
