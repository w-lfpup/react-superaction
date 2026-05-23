import { useContext, useMemo, useState } from "react";
import { SuperContext } from "./provider.js";
import { ActionInterface } from "@w-lfpup/superaction";

export function useActionReducer(cb: Cb) {
	let action = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<ActionInterface | undefined>(
		undefined,
	);

	if (action === prevAction) return;

	setPrevAction(action);
	if (action) cb(action);
}

// single action hook useAction("howdy")
export function useAction(type: string): ActionInterface | undefined {
	let action = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<ActionInterface | undefined>(
		undefined,
	);

	if (action === prevAction) return;

	if (type === action?.type) {
		setPrevAction(action);
		return action;
	}
}

// all the actions liste
type Cb = (action: ActionInterface) => void;
