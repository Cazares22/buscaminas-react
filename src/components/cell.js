import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
      super(props);
      this.state = {
        near: this.props.cell.near,
        withMine: this.props.cell.withMine,
        withFlag: this.props.cell.withFlag,
        opened: this.props.cell.opened,
      };
  }

  render() {
    return (
      <td className="game-cell">
        <div className="game-cell__hide">{`${this.state.withMine}`}</div>
      </td>
    );
  }
}


Cell.propTypes = {};

Cell.defaultProps = {};
