import React from "react";
import Inputs from "./Inputs";
import "../style.css";

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
    const { topLine, bottomLine, imageUrl } = this.state;
    return (
      <div className="app-container">
        <Inputs
          onLineChange={this.handleLineChange}
          topLine={topLine}
          bottomLine={bottomLine}
          imageUrl={imageUrl}
        />
        <Meme topLine={topLine} bottomLine={bottomLine} imageUrl={imageUrl} />
      </div>
    );
  }
}

const Meme = ({ topLine, bottomLine, imageUrl }) => (
  <div className="meme-container">
    <h1 className="top-line">{topLine}</h1>
    <h1 className="bottom-line">{bottomLine}</h1>
    <img className="meme" src={imageUrl} />
  </div>
);

export default App;
