import React, { useEffect, useState } from "react";
import { SuperAction, ActionEvent, } from "@w-lfpup/superaction";
import { SuperContext } from "./context.js";
export function SuperActionProvider(props) {
    let { eventNames, children, host = document, target } = props;
    let [value, setValue] = useState(undefined);
    useEffect(function () {
        let superAction = new SuperAction({
            infix: "-",
            host,
            target,
            eventNames,
        });
        function cb(e) {
            if (e instanceof ActionEvent)
                setValue(e.action);
        }
        superAction.connect();
        host.addEventListener("#action", cb);
        return function () {
            superAction.disconnect();
            host.removeEventListener("#action", cb);
        };
    }, [host, target, eventNames]);
    return (React.createElement(SuperContext.Provider, { value: value }, children));
}
