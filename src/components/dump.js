import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to the channel"
    };
  }

  changeMessage(name) {
    this.setState({
      message: `Thank you for subscribing Mr. ${this.props.name}`
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage("hgdgh")}>Subscribe</button>
      </div>
    );
  }
}

export default Counter;
