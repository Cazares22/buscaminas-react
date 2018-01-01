import React, { Component } from 'react';
import Row from './row.js';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <table className="game-table">
        <tbody>
          <Row />
        </tbody>
      </table>
    );
  }
}


Table.propTypes = {};

Table.defaultProps = {};


module.exports = Table;
