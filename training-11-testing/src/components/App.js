import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Meme from "./Meme";

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    topLine: "",
    bottomLine: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Input
          handleChange={this.handleChange}
          topLine={this.state.topLine}
          bottomLine={this.state.bottomLine}
        />
        <Meme topLine={this.state.topLine} bottomLine={this.state.bottomLine} />
      </div>
    );
  }
}
