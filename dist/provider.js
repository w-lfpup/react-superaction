import React, { useEffect, useState } from "react";
import { ActionEvent } from "@w-lfpup/superaction";
import { SuperContext } from "./context.js";
export function SuperActionProvider(props) {
    let { children, target } = props;
    let [value, setValue] = useState(undefined);
    console.log("provider!");
    useEffect(function () {
        function cb(e) {
            console.log("events!!!");
            if (e instanceof ActionEvent)
                setValue(e.action);
        }
        target.addEventListener("#action", cb);
        return function () {
            target.removeEventListener("#action", cb);
        };
    }, [target]);
    return (React.createElement(SuperContext.Provider, { value: value }, children));
}
