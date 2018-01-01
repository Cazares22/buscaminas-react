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
      };
  }

  revealCell(){
    if (!this.state.opened) {
      this.setState({ opened: true });
    }
    if (this.state.withDecorator > 0) {
      this.setState({ withDecorator: 0 });
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

  render() {
    const cellClasses = classNames('game-cell, game-cell__hide', {
      'game-cell__open': this.state.opened,
      'game-cell__mine': this.state.opened && this.state.withMine,
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
