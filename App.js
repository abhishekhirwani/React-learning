// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from React!"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h1", {}, "i am an h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h1", {}, "i am an h1 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
