import React, { Component } from 'react';
import Table from './components/table.js';
import './game.css';
const config = require('./config.js');



export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mines : config.level1.mines,
      rows : config.level1.rows,
      cols : config.level1.cols,
      time : 0,
    };
  }

  render() {
    return (
      <section className="game">
        <header className="game-header">
          <h1 className="game-title">Desafío Buscaminas</h1>
        </header>
        <main>
          <Table
            tableRows={this.state.rows}
            tableCols={this.state.cols}
            minesCount={this.state.mines}
          />
        </main>
      </section>
    );
  }
}


Game.propTypes = {};

Game.defaultProps = {};
