import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";
class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "six",
    };
    this.genRand = this.genRand.bind(this);
  }
  genRand() {
    const numsByWord = ["zero", "one", "two", "three", "four", "five", "six"];
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let word1 = numsByWord[rand1];
    let rand2 = Math.floor(Math.random() * 6) + 1;
    let word2 = numsByWord[rand2];
    this.setState({ die1: word1, die2: word2 });
  }
  render() {
    return (
      <div className="RollDice">
        <Die num={this.state.die1} />
        <Die num={this.state.die2} />
        <div>
          <button onClick={this.genRand} className="RollDice-but">
            Roll Dice
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
