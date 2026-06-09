import { useContext, useState } from "react";
import { SuperContext } from "./context.js";
export function useAction(cb, args) {
    let action = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (action === prevAction)
        return;
    if (args && action && args[0] !== action.type)
        return;
    setPrevAction(action);
    if (action)
        cb(action);
}
