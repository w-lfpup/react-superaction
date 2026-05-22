import React, { useState } from "react";
import { useActionReducer } from "../../dist/mod.js";
export function Counter() {
    let [count, setCount] = useState(0);
    useActionReducer((action) => {
        let { type } = action;
        console.log("from action reducer", action);
        if (type === "increment") {
            console.log(type);
            setCount(2);
        }
        if (type === "decrement")
            setCount((count) => count - 1);
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { "click-": "decrement" }, "-"),
        React.createElement("button", { "click-": "increment" }, "+"),
        React.createElement("p", null, count)));
}
