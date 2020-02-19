import React from "react";
import renderer from "react-test-renderer";
import {ArtistQuestionScreen} from "./artist-question-screen.jsx";

it(`Если приложение загрузилось, то компонент ArtistQuestionScreen отрисовался`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={{song: {src: ``}, answers: []}}
      onAnswer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
