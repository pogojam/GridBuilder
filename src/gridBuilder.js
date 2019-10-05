import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gridTemplateAreas, gridGap } from "styled-system";
import { Box } from "rebass";

const Container = styled(Box)`
  ${gridTemplateAreas}
  ${gridGap}
`;

const pipe = input => (...arr) => {
  arr.reduce((acc, func) => func(acc), input);
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
  return arrString.reduce((acc, val) => acc + val);
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

const logger = item => {
  console.log(item);
  return item;
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
    const setTemplate = input =>
      pipe(input)(addPrefix(prefix), serialize, logger, setTemplateState);

    if (isMobile) {
      template.map(temp => setTemplate(temp));
    } else {
      setTemplate(template);
    }
  }, [isMobile, prefix, template]);

  const gridChildren = attachProps(children, i => ({
    style: { gridArea: prefix + i }
  }));

  console.log(computedTemplate);
  return (
    <Container display="grid" gridTemplateAreas={computedTemplate} {...props}>
      {gridChildren}
    </Container>
  );
};
