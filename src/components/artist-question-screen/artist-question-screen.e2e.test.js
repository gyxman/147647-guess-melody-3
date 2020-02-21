import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ArtistQuestionScreen} from "./artist-question-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `song.ogg`,
  },
  answers: [{
    picture: `picture1`,
    artist: `John Snow`,
  }, {
    picture: `picture2`,
    artist: `Jack Daniels`,
  }, {
    picture: `picture3`,
    artist: `Jim Beam`,
  }],
};

it(`Если пользователь кликает по варианту ответа, то передаем данные о текущем вопросе и ответе пользователя`, () => {
  const question = mock;
  const onAnswer = jest.fn();
  const mockEvent = {
    preventDefault() {}
  };

  const userAnswer = {
    picture: `picture1`,
    artist: `John Snow`,
  };

  const artistQuestionScreen = shallow(
      <ArtistQuestionScreen
        question={question}
        onAnswer={onAnswer}
      />
  );

  const input = artistQuestionScreen.find(`input`).at(0);

  input.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
