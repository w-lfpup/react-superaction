import { useContext, useState } from "react";
import { SuperContext } from "./provider.js";
export function useSuperAction(cb) {
    let action = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (action === prevAction)
        return;
    setPrevAction(action);
    if (action)
        cb(action);
}
export function useAction(type, cb) {
    let action = useContext(SuperContext);
    let [prevAction, setPrevAction] = useState(undefined);
    if (action === prevAction || type === action?.type)
        return;
    setPrevAction(action);
    if (action)
        cb(action);
}
