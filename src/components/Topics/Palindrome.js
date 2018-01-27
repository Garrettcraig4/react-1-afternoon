import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  change(val) {
    this.setState({ userInput: val });
  }

  solution(userInput) {
    let forw = userInput;
    let back = userInput;
    back = back.split("");
    back = back.reverse();
    back = back.join("");

    if (forw === back) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input
          className="inputLine"
          onChange={e => this.solution(e.setState.userInput)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.solution(this.state.userInput)}
        >
          {" "}
          Check{" "}
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
      </div>
    );
  }
}
export default Palindrome;
