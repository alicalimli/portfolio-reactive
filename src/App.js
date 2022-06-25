import ReactDOM from "react-dom";
import React from "react";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>  
      <h1>hello world!</h1>
    </StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
