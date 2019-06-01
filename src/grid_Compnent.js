import React, { Component } from "react";
import styled from "styled-components";
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
        ${gridRow}
        ${gridTemplateAreas}
`;

class GridBuilder extends Component {
  serializeArea(area) {
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
    const serializeArea = array.reduce((acc, val) => acc + val);

    return serializeArea;
  }

  buildGrid(input) {
    let AreaDepth = this.getArrayDepth(input);
    const Area = [];

    if (AreaDepth > 2) {
      input.forEach(tem => Area.push(this.serializeArea(tem)));
    } else {
      Area.push(this.serializeArea(input));
    }
    console.log(Area);

    return Area;
  }

  getArrayDepth = array => {
    let TrueDepth = 0;

    const dig = (e, depth) => {
      if (Array.isArray(e)) {
        depth && (depth = e.length);
        depth -= 1;
        ++TrueDepth;
        dig(e[0]);
      }
    };
    dig(array);

    return TrueDepth;
  };

  render() {
    const { template } = this.props;
    const children = React.Children.map(this.props.children, (child, i) => {
      const areaName = "box" + i;
      return React.cloneElement(child, {
        gridArea: areaName
      });
    });

    // const Template = css`
    //   ${this.serializedArea(template)}
    // `;

    return (
      <Container
        gridTemplateAreas={this.buildGrid(template)}
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
