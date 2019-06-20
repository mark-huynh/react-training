import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const Home = props => {
  return (
    <div>
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
