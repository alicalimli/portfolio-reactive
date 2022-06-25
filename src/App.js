import ReactDOM from "react-dom";
import React from "react";
import { StrictMode } from "react";

import Header from "./Components/Header/Header.jsx";

const App = () => {
  return (
    <StrictMode>
      <Header />
    </StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
