import React from "react";
import ReactDOM from "react-dom/client";
import { SuperAction } from "@w-lfpup/superaction";
import { SuperActionProvider } from "../../dist/mod.js";
import { Form } from "./form.js";
let rootEl = document.querySelector("#root");
if (rootEl) {
    let _superAction = new SuperAction({
        host: rootEl,
        eventNames: ["submit"],
        connected: true,
        infix: "-", // react safe
    });
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(SuperActionProvider, { target: rootEl },
        React.createElement(Form, null)));
}
