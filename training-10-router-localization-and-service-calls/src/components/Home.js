import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const Home = props => {
  return (
    <div>
      <Link to="/dogs">
        <button>
          <FormattedMessage id="HOME.BUTTON" defaultMessage="Dogs" />
        </button>
      </Link>
      <h1>
        <FormattedMessage
          id="HOME.TITLE"
          defaultMessage="Welcome to the Dog Fan Page!"
        />
      </h1>
    </div>
  );
};

Home.propTypes = {};

export default Home;
