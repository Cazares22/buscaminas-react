import React, { Component } from 'react';


class Cell extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
      <td className="game-cell">
        <div className="game-cell__hide"></div>
      </td>
    );
  }
}


Cell.propTypes = {};

Cell.defaultProps = {};


module.exports = Cell;
