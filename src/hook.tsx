import { useContext } from "react";
import { SuperContext } from "./provider.js";

// single action hook useAction("howdy")
export function useAction(type: string) {
	let action = useContext(SuperContext);
	if (type === action?.type) return action;
}

// all the actions liste
export function useActionReducer() {}
