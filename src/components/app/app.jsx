import React from "react";
import PropTypes from "prop-types";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

export const App = ({errorsCount}) => {
  return <WelcomeScreen errorsCount={errorsCount}/>;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};
