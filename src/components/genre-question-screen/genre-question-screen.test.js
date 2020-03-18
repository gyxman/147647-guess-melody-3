import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen.jsx";

it(`Если приложение загрузилось, то компонент GenreQuestionScreen отрисовался`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
      question={{answers: [], genre: ``}}
      onAnswer={() => {}}
      renderPlayer={() => {}}
      onChange={() => {}}
      userAnswers={[false, false, false, false]}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
