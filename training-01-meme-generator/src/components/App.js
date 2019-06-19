import React from "react";

class App extends React.Component {
  state = {
    topLine: "",
    bottomLine: "",
    imageUrl: ""
  };

  componentDidMount() {
    this.setState({ message: "Hello World" });
  }

  handleLineChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <label>Top Line</label>
        <input
          name="topLine"
          onChange={this.handleLineChange}
          value={this.state.topLine}
        />
        <label>Bottom Line</label>
        <input
          name="bottomLine"
          onChange={this.handleLineChange}
          value={this.state.bottomLine}
        />
        <label>Image Url</label>
        <input
          name="imageUrl"
          onChange={this.handleLineChange}
          value={this.state.imageUrl}
        />
        <h1>{this.state.topLine}</h1>
        <h1>{this.state.bottomLine}</h1>
        <img src={this.state.imageUrl} />
      </React.Fragment>
    );
  }
}

export default App;
