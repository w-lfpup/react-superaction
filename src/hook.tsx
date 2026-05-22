import { useContext } from "react";
import { SuperContext } from "./provider.js";
import { ActionInterface } from "@w-lfpup/superaction";

// single action hook useAction("howdy")
export function useAction(type: string) {
	let action = useContext(SuperContext);
	console.log(action);
	if (type === action?.type) return action;
}

// all the actions liste
type Cb = (action: ActionInterface) => void;

export function useActionReducer(cb: Cb) {
	let action = useContext(SuperContext);
	console.log(action);
	if (action) cb(action);
}
