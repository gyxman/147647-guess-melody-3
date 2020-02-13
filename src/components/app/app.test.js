import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

it(`Если приложение загрузилось, то компонент App отрисовался`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
