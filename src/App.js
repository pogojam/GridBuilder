import React from "react";
import { GridBuilder } from "./gridBuilder";
import "./App.css";
import { Box } from "rebass";

const Dummy = Box;

const Template = {
  page: [[1, 1, 1, 1], [2, 0, 0, 0], [3, 0, 0, 0], [4, 0, 0, 0], [5, 5, 5, 5]],
  dash: [[[0, 1, 1], [0, 1, 1], [0, 2, 2]], [[0, 0, 1], [0, 0, 1], [2, 2, 2]]]
};

function App() {
  return (
    <div className="App">
      <GridBuilder
        style={{ minHeight: "100%", minWidth: "100%" }}
        gridGap="1em"
        template={Template.page}
      >
        <GridBuilder gridGap="1em" template={Template.dash}>
          <Dummy bg={["blue", "black"]} />
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
