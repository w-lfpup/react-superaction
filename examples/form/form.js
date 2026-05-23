import React, { useState } from "react";
import { useSuperAction } from "../../dist/mod.js";
export function Form() {
    let [formAsJSON, setFormAsJSON] = useState("");
    useSuperAction((action) => {
        let { type, formData } = action;
        if (type === "submit_form" && formData) {
            let entries = Object.fromEntries(formData.entries());
            setFormAsJSON(JSON.stringify(entries, undefined, " "));
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { "submit-": "submit_form", "submit-prevent-default": "" },
            React.createElement("input", { type: "email", name: "email" }),
            React.createElement("br", null),
            React.createElement("input", { type: "password", name: "password" }),
            React.createElement("br", null),
            React.createElement("button", { type: "submit" }, "let's go!")),
        React.createElement("pre", null, formAsJSON)));
}
