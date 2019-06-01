import React from "react";
import GridBuilder from "./grid_Compnent";
import "./App.css";
import styled, { css } from "styled-components";

import {
  gridArea,
  display,
  color,
  minWidth,
  minHeight,
  gridGap,
  gridRow,
  gridTemplateColumns
} from "styled-system";

const Dummy = styled.div`

        ${gridArea}
        ${color}
        ${minWidth}
        ${minHeight}
        grid-template-areas:${({ gridTemplateAreas }) => gridTemplateAreas};
`;

const Template = {
  page: [[1, 1, 1, 1], [2, 0, 0, 0], [3, 0, 0, 0], [4, 0, 0, 0], [5, 5, 5, 5]],
  dash: [[[0, 1, 1], [0, 1, 1], [0, 2, 2]], [[0, 0, 1], [0, 0, 1], [2, 2, 2]]]
};

// console.log(Template.dash[1]);

function App() {
  return (
    <div className="App">
      <GridBuilder gridGap="1em" template={Template.page}>
        <GridBuilder
          gridGap="1em"
          template={[Template.dash[0], Template.dash[1]]}
        >
          <Dummy bg="blue" />
          <Dummy bg="blue" />
          <Dummy bg="blue" />
        </GridBuilder>
        <Dummy bg="brown" />
        <Dummy bg="pink" />
        <Dummy bg="pink" />
        <Dummy bg="pink" />
        <Dummy bg="pink" />
      </GridBuilder>
    </div>
  );
}

export default App;
