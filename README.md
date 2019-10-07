# GridBuilder
![gridlogo](https://res.cloudinary.com/dxjse9tsv/image/upload/v1570488103/Logos/GridBuilder.svg)

Build layouts quickly using matrixes to represent components positioning. 

## Usage

``` npm i react-gridbuilder```

Supply the Gridbuilder component with multiple matrices for mobile devices or a single matrix. Grid component uses  [styled system](https://github.com/styled-system/styled-system) for prop styling .

### Template Formating

In the example bellow , each child compnent inside grid builder is given a grid area coresponding to its index inside the gridbuilder.

```
const Template = {
  page: [
  [1, 1, 1, 1],
  [2, 0, 0, 0],
  [3, 0, 0, 0],
  [4, 0, 0, 0],
  [5, 5, 5, 5]
  ],
  dash: [[
  [0, 1, 1],
  [0, 1, 1],
  [0, 2, 2]
  ],[
  [0, 0, 1],
  [0, 0, 1],
  [2, 2, 2]
  ]]
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
```
![layout example](https://res.cloudinary.com/dxjse9tsv/image/upload/v1570489149/git/Screen_Shot_2019-10-07_at_3.52.53_PM.png)
