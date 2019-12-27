import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gridTemplateAreas, gridGap } from "styled-system";
import { Box } from "rebass";

const Container = styled(Box)`
  ${gridTemplateAreas}
  ${gridGap}
`;

const pipe = input => (...arr) => {
  return arr.reduce((acc, func) => func(acc), input);
};

const addPrefix = prefix => vals =>
  vals.map(el => {
    let row = "";

    el.forEach((num, i) => {
      row += prefix + num + " ";
    });
    return row;
  });

const serialize = css => {
  const arrString = css.map(val => `"${val}"`);
  return arrString.reduce((acc, val) => acc + val, "");
};

const getArrayDepth = array => {
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

const attachProps = (children, setProps) => {
  return React.Children.map(children, (el, i) =>
    React.cloneElement(el, setProps(i))
  );
};

export const GridBuilder = ({
  template = [],
  prefix = "box",
  children,
  ...props
}) => {
  const [computedTemplate, setTemplateState] = useState([]);
  const isMobile = getArrayDepth(template) > 2;

  useEffect(() => {
    const setTemplate = input => pipe(input)(addPrefix(prefix), serialize);

    if (isMobile) {
      console.log("This is using a mobile layout", template);
      const gridArea = template.map(temp => setTemplate(temp));
      setTemplateState(gridArea);
      console.log(computedTemplate);
    } else {
      const gridArea = setTemplate(template);
      setTemplateState(gridArea);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gridChildren = attachProps(children, i => ({
    style: { gridArea: prefix + i }
  }));

  return (
    <Container display="grid" gridTemplateAreas={computedTemplate} {...props}>
      {gridChildren}
    </Container>
  );
};
