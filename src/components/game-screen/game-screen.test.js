import React from "react";
import renderer from "react-test-renderer";
import {GameScreen} from "./game-screen.jsx";
import {GameType} from "../../enums/game-type.enum";


const children = <div className="children-component" />;

describe(`Если приложение загрузилось, то компонент GameScreen отрисовался`, () => {
  it(`тип экрана GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.ARTIST}
          mistakes={3}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`тип экрана GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.GENRE}
          mistakes={3}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
