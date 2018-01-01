import React, { Component } from 'react';
import Cell from './cell.js';


class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <tr className="game-row">
        <Cell />
      </tr>
    );
  }
}


Row.propTypes = {};

Row.defaultProps = {};


module.exports = Row;
