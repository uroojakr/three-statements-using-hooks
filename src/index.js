import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StatementsProvider } from "./Components/statement-context";

ReactDOM.render(
  <StatementsProvider>
    <App />
  </StatementsProvider>,
  document.getElementById("root")
);
