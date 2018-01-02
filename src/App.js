import React, { Component } from 'react';
import Table from './components/table.js';
import './game.css';
const config = require('./config.js');
const classNames = require('classnames');


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.finishGame = this.finishGame.bind(this);
    this.state = {
      mines : config.level1.mines,
      rows : config.level1.rows,
      cols : config.level1.cols,
      time : 0,
      result: '',
    };
  }

  finishGame(result) {
    this.setState({ result });
  }

  render() {

    const resultClasses = classNames('game-result', {
      'game-result__show': this.state.result !== '',
      'game-result__lost': this.state.result === 'perdido',
      'game-result__win': this.state.result === 'ganado',
    });

    return (
      <section className="game">
        <header className="game-header">
          <h1 className="game-title">Desafío Buscaminas</h1>
        </header>
        <main>
          <Table
            tableRows={this.state.rows}
            tableCols={this.state.cols}
            totalMines={this.state.mines}
            endGame={this.finishGame}
          />
          <article className={resultClasses}>
            El juego llegó a su fin. Has {this.state.result}!
          </article>
        </main>
      </section>
    );
  }
}


Game.propTypes = {};

Game.defaultProps = {};
