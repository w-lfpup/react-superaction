import React, { useState } from "react";
import { useActionReducer } from "../../dist/mod.js";
export function Counter() {
    let [count, setCount] = useState(0);
    useActionReducer((action) => {
        let { type } = action;
        if (type === "increment")
            setCount((count) => count + 1);
        if (type === "decrement")
            setCount((count) => count - 1);
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { "click-": "increment" }, "-"),
        React.createElement("button", { "click-": "decrement" }, "+"),
        React.createElement("p", null, count)));
}
