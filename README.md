## GridBuilder

Build layouts quickly using matrixes to represent component positioning. Supply the Gridbuilder component with multiple matrices for mobile devices.

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
};

function App() {
return (
<div className="App">
<GridBuilder
style={{ minHeight: "100%", minWidth: "100%" }}
gridGap="1em"
template={Template.page} >
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
