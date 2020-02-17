import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import {ArtistQuestionScreen} from "../artist-question-screen/artist-question-screen.jsx";
import {GenreQuestionScreen} from "../genre-question-screen/genre-question-screen.jsx";

const welcomeButtonHandler = () => {
};

export const App = ({errorsCount, questions}) => {
  // return <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={welcomeButtonHandler}/>;/**/
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={welcomeButtonHandler} />
      </Route>
      <Route exact path="/dev-artist">
        <ArtistQuestionScreen question={questions[1]} />
      </Route>
      <Route exact path="/dev-genre">
        <GenreQuestionScreen question={questions[0]} />
      </Route>
    </Switch>
  </BrowserRouter>;
};


App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};
