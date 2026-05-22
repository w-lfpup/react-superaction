import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./counter.js";
let rootEl = document.getElementById("root");
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(Counter, null));
}
