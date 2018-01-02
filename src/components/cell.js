import React, { Component } from 'react';
const classNames = require('classnames');


export default class Cell extends Component {
  constructor(props) {
      super(props);
      this.revealCell = this.revealCell.bind(this);
      this.setDecorator = this.setDecorator.bind(this);
      this.state = {
        near: this.props.cell.near,
        opened: this.props.cell.opened,
        withMine: this.props.cell.withMine,
        withDecorator: this.props.cell.withDecorator,
        cellsOpened: 0,
        totalCellsWithoutMines: this.props.maxRows * this.props.maxCols - this.props.totalMines,
      };
  }

  revealCell(event){
    if (!this.state.opened) {
      this.setState({
        opened: true,
        cellsOpened: this.state.cellsOpened + 1,
      });

      if (this.state.withMine) {
        this.props.endGame('perdido');
        return;
      }

      if (this.state.cellsOpened === this.state.totalCellsWithoutMines) {
        this.props.endGame('ganado');
        return;
      }

      this.getNearMines();

      if (this.state.withDecorator > 0) {
        this.setState({ withDecorator: 0 });
      }
    }
    return;
  }

  setDecorator(event){
    event.preventDefault();
    if (!this.state.opened) {
      let val = 0;
      this.state.withDecorator === 2 ? val = 0 : val = this.state.withDecorator + 1
      this.setState({ withDecorator: val });
    }
    return;
  }

  getNearMines() {
    const cell = this.props.cell;
    const totalRows = this.props.maxRows;
    const totalCols = this.props.maxCols;
    const table = this.props.table;
    let nearMines = 0;

    for(let row = -1; row <= 1; row++){
      for(let col = -1; col <= 1; col++){
        if (!(row === 0 && col === 0)) {
          if(cell.y + row >= 0 && cell.x + col >= 0 && cell.y + row < totalRows && cell.x + col < totalCols && table[cell.y + row][cell.x + col].withMine){
            nearMines ++;
          }
        }
      }
    }

    this.setState({ near: nearMines });
  }

  render() {
    const cellClasses = classNames('game-cell, game-cell__hide', {
      'game-cell__open': this.state.opened,
      'game-cell__mine': this.state.withMine,
      'game-cell__flag': this.state.withDecorator === 1,
      'game-cell__quest': this.state.withDecorator === 2,
    });

    return (
      <td className={cellClasses} onClick={this.revealCell} onContextMenu={this.setDecorator}>
        <div className='game-cell__content'>{this.state.near}</div>
      </td>
    );
  }
}


Cell.propTypes = {};

Cell.defaultProps = {};
