import React from "react";
import ReactDOM from "react-dom/client";
import { SuperAction } from "@w-lfpup/superaction";
import { SuperActionProvider } from "../../dist/mod.js";
import { Counter } from "./counter.js";
let rootEl = document.querySelector("#root");
if (rootEl) {
    let _superAction = new SuperAction({
        host: rootEl,
        eventNames: ["submit"],
        connected: true,
    });
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(SuperActionProvider, { target: rootEl },
        React.createElement(Counter, null)));
}
