import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { fetchDogs } from "../api/dogs";

class Dogs extends Component {
  state = {
    urls: [],
    query: "",
    error: null
  };

  handleSearchChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleButtonClick = async () => {
    const { urls, error } = await fetchDogs(this.state.query);
    this.setState({ urls, error });
  };

  render() {
    const { urls, query, error } = this.state;
    return (
      <div>
        <Link to="/">
          <button>
            <FormattedMessage id="DOGS.BUTTON" defaultMessage="Home" />
          </button>
        </Link>
        <label>Search Breeds</label>
        <input value={query} onChange={this.handleSearchChange} />
        <button onClick={this.handleButtonClick}>Submit</button>
        <h1>I am the dogs page!</h1>
        {urls.map((url, i) => {
          return <img key={url} src={url} alt={`dog ${i}`} />;
        })}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default Dogs;
