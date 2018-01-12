import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <button>
        {this.props.name}
        {event => this.onInputChange(event.target.value)}
      </button>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.name;
  }
}



export default Button;
