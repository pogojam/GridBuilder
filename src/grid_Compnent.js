import React, { Component } from "react";
import styled, { css } from "styled-components";
import {
  gridArea,
  display,
  color,
  minWidth,
  minHeight,
  gridGap,
  gridRow,
  gridTemplateAreas
} from "styled-system";

const Container = styled.div`
        ${gridArea}
        ${color}
        ${minWidth}
        ${minHeight}
        ${display}
        ${gridGap}
            ${gridTemplateAreas}
        grid-template-areas:${({ gridTemplateAreas }) => gridTemplateAreas};
`;

class GridBuilder extends Component {
  serializedArea(area) {
    if (!Array.isArray(area)) {
      console.error("Please supply Array to area prop of GridBuilder");
      return;
    }

    const convertedData = area.map(el => {
      let row = "";
      let prefix = "box";

      el.forEach((num, i) => {
        row += prefix + num + " ";
      });
      return row;
    });

    const array = convertedData.map(val => `"${val}"`);
    const serializedArea = array.reduce((acc, val) => acc + val);

    return serializedArea;
  }

  render() {
    const {template} = this.props;
    const children = React.Children.map(this.props.children, (child, i) => {
      const areaName = "box" + i;
      return React.cloneElement(child, {
        gridArea: areaName
      });
    });

    const Template = css`
      ${this.serializedArea(template)}
    `;

    return (
      <Container
      gridTemplateAreas={Template}
        display="grid"
        minWidth="100%"
        minHeight="100%"
        {...this.props}
      >
        {children}
      </Container>
    );
  }
}

export default GridBuilder;
