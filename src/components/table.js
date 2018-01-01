import React, { Component } from 'react';
import Row from './row.js';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setTable(propRow, propCol) {
    let gameTable = [];
    for(let rowNumber = 0; rowNumber < propRow; rowNumber++){
      gameTable.push([]);
      for(let colNumber = 0; colNumber < propCol; colNumber++){
        gameTable[rowNumber].push({
          x : colNumber,
          y : rowNumber,
          near : 0,
          opened : false,
          withMine : false,
          withDecorator : 0,
        });
      }
    }
    return gameTable;
  }

  setMines(gameTable, propRow, propCol, propMine) {
    for(let mine = 0; mine < propMine; mine++){
      let cell = gameTable[Math.floor(Math.random()*propRow)][Math.floor(Math.random()*propCol)];
      if(cell.withMine){
          mine--;
      } else {
          cell.withMine = true;
      }
    }
    return gameTable
  }

  generateTable(propRow, propCol, propMine) {
    let gameTable = this.setTable(propRow, propCol);
    const gameTableWithMines = this.setMines(gameTable, propRow, propCol, propMine);
    return gameTableWithMines;
  }

  render() {
    const {tableRows, tableCols, minesCount} = this.props;

    const generatedTable = this.generateTable(tableRows, tableCols, minesCount);

    const Rows = generatedTable.map((row, index) => {
      return(
        <Row cells={row} key={index} />
      );
    });

    return(
      <table className="game-table">
        <tbody>
          {Rows}
        </tbody>
      </table>
    );
  }
}


Table.propTypes = {};

Table.defaultProps = {};
