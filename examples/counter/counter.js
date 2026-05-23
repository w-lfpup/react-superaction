import React, { useState } from "react";
import { useSuperAction } from "../../dist/mod.js";
export function Counter() {
    let [count, setCount] = useState(0);
    useSuperAction((action) => {
        let { type } = action;
        if (type === "increment")
            setCount(count + 1);
        if (type === "decrement")
            setCount(count - 1);
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { "click-": "decrement" }, "-"),
        React.createElement("button", { "click-": "increment" }, "+"),
        React.createElement("p", null, count)));
}
