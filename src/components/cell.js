import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
      <td className="game-cell">
        <div className="game-cell__hide">lalala</div>
      </td>
    );
  }
}


Cell.propTypes = {};

Cell.defaultProps = {};
