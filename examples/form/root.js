import React from "react";
import ReactDOM from "react-dom/client";
import { SuperProvider } from "../../dist/mod.js";
import { CustomForm } from "./custom_form.js";
let eventNames = ["submit"];
let rootEl = document.querySelector("#root");
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(SuperProvider, { eventNames: eventNames },
        React.createElement(CustomForm, null)));
}
