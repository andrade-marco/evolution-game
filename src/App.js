//App container
//Modules
import React, { Component } from "react";
import Cell from "./components/Cell";
import { shuffle, createMergedSlices, checkBoardEquality } from "./utils";

//Container
class App extends Component {
  constructor(){
    super();
    this.state = {
      initial: 6,
      completed: false,
      running: false,
      board: [],
    }
  }

  //Life cycle
  componentDidMount() {
    const newBoard = this.generateGameBoard(6);
    this.setState({ board: newBoard });
  }

  //Helpers
  //Generate Game Board
  // This function generates a new board given a threshold of how many 1s should
  // be present at the start of the game

  generateGameBoard = (threshold) => {
    //Generate two arrays with only 1s and 0s, with the array of 1s
    // depending on the number threshold passed to the function. This determines
    // the initial number of alive cells
    let num;
    if (threshold || threshold === 0) {
      num = threshold;
    } else {
      num = Math.round(Math.random() * 36);
    }

    const ones = new Array(num).fill(1);
    const zeros = new Array(36 - num).fill(0);
    const combined = shuffle([ ...ones, ...zeros ]);

    let index = -1;
    return new Array(6).fill(null).map(() => {
      return new Array(6).fill(null).map(() => {
        index++;
        return combined[index];
      });
    });
  }

  //Evolve
  // This function hold the routine for running one round of evolution of a
  // specific board; It checks if dead cells should be switched to alive given
  // the rules of the game

  evolve = (board) => {
    let updatedBoard = this.generateGameBoard(0);
    for (let i = 0; i < updatedBoard.length; i++) {
      for (let j = 0; j < updatedBoard[i].length; j++) {
        const currVal = board[i][j];
        if (currVal > 0) {
          updatedBoard[i][j] = currVal;
        } else {
          const merged = createMergedSlices(board, i, j);
          const adjSum = merged.reduce((acc, next) => acc + next) - currVal;

          if (adjSum >= 2) {
            updatedBoard[i][j] = 1;
          }
        }
      }
    }

    return updatedBoard;
  }

  //Run Game
  // This function is responsible for running the game
  runGame = () => {
    const { gameBoards } = this.generateGameResults();
    for (let i = 0; i < gameBoards.length; i++) {
      setTimeout(() => {
        this.setState({
          board: gameBoards[i],
          running: i < gameBoards.length - 1,
          completed: i === gameBoards.length - 1
        });
      }, (i + 1) * 700);
    }
  }


  //Generate Game Results
  generateGameResults = () => {
    let count = 0;
    let gameBoards = [this.state.board];
    let keepEvolving = true;

    while (keepEvolving) {
      const last = gameBoards.length - 1;
      const updated = this.evolve(gameBoards[last]);
      keepEvolving = !checkBoardEquality(gameBoards[last], updated);
      gameBoards.push(updated);
      count++;
    }

    return { gameBoards, count };
  }

  //Resolve content
  resolveContent = () => {
    const { board } = this.state;
    return board.map((row, i) => {
      const cells = row.map((cell, j) => {
        return <Cell key={`column-${j}`} state={cell}/>;
      });

      return <div key={`row-${i}`} className="board-row">{cells}</div>;
    });
  }

  //Get button text
  getButtonProps = () => {
    const { running } = this.state;
    if (running) {
      return { btnClass: "game-button-running", text: "Evolving..." };
    }

    return { btnClass: "game-button", text: "Start game" };
  }

  //Handlers
  //Handle start game
  handleStartGame = () => {
    this.setState({ running: true, completed: false }, this.runGame);
  }

  //Reset game
  resetGame = () => {
    this.setState({
      board: this.generateGameBoard(6),
      completed: false,
      running: false
    });
  }

  render() {
    const { running, completed } = this.state;
    const { btnClass, text } = this.getButtonProps();

    return (
      <div>
        <div>
          {this.resolveContent()}
        </div>
        <div className="buttons-container">
          <button
            onClick={this.handleStartGame}
            className={btnClass}
            disabled={running || completed}>
            {text}
          </button>
          <button
            className="game-button"
            disabled={running || completed}>
            Randomize
          </button>
          {completed &&
          <button
            onClick={this.resetGame}
            className="game-button">
            Reset game
          </button>}
        </div>
      </div>
    );
  }
}

//Export
export default App;
