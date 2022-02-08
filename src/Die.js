import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  render() {
    return (
      <div className="Die">
        <div className="Die-style Die-animation">
          <i className={`fas fa-dice-${this.props.num} fa-10x`}></i>
        </div>
      </div>
    );
  }
}
export default Die;

// this.props.num give num 1,2,3...