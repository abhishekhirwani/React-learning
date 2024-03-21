import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>React Title</h1>;
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>welcome to React learning</h1>;
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
