import { useContext, useState } from "react";
import { SuperContext } from "./context.js";
export function useSuperAction(cb) {
    let action = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (action === prevAction)
        return;
    setPrevAction(action);
    if (action)
        cb(action);
}
export function useActionSelector(cb, args) {
    let action = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (!action || action === prevAction || args?.[0] !== action?.type)
        return;
    setPrevAction(action);
    if (action)
        cb(action);
}
