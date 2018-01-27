import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["I", "Love", "To", "Code"],
      userInput: "",
      filteredArray: []
    };
  }

  changeMe(val) {
    this.setState({ userInput: val });
  }
  solution(userInput) {
    let arr = this.state.unFilteredArray;
    let filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].includes(userInput)) {
        filteredArray.push(arr[i]);
      }
    }
    this.setState({ filteredArray: filteredArray });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">
          {" "}
          Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.solution(e.setState.userInput)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.solution(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterStringRB">
          {" "}
          Filtered Names: {JSON.stringify(
            this.state.filteredArray,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
}
