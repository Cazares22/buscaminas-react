import React, { Component } from 'react';
import Cell from './cell.js';

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const Cells = this.props.cells.map((cell, index) => {
      return(
        <Cell cell={cell} key={index} maxRows={this.props.maxRows} maxCols={this.props.maxCols} table={this.props.table} />
      );
    });

    return (
      <tr className="game-row">
        {Cells}
      </tr>
    );
  }
}


Row.propTypes = {};

Row.defaultProps = {};
