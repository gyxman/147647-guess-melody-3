import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenreQuestionScreen} from "./genre-question-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `song1.ogg`,
    genre: `rock`,
  }, {
    src: `song2.ogg`,
    genre: `blues`,
  }, {
    src: `song3.ogg`,
    genre: `jazz`,
  }, {
    src: `song4.ogg`,
    genre: `rock`,
  }],
};

it(`Если пользователь отправляет форму, то передаем данные о текущем вопросе и ответах пользователя`, () => {
  const question = mock;
  const onAnswer = jest.fn();
  const mockEvent = {
    preventDefault() {}
  };

  const userAnswer = [true, false, false, false];

  const genreQuestionScreen = shallow(
      <GenreQuestionScreen
        question={question}
        onAnswer={onAnswer}
        renderPlayer={() => {}}
      />
  );

  const input = genreQuestionScreen.find(`input`).at(0);
  const form = genreQuestionScreen.find(`form`).at(0);

  input.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
