import React from "react";
import ReactDOM from "react-dom/client";
import { SuperProvider } from "../../dist/mod.js";
import { Counter } from "./counter.js";
let eventNames = ["click"];
let rootEl = document.querySelector("#root");
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(SuperProvider, { eventNames: eventNames },
        React.createElement(Counter, null)));
}
