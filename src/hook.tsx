import { useContext, useState } from "react";
import { SuperContext } from "./provider.js";
import { ActionInterface } from "@w-lfpup/superaction";

type Cb = (action: ActionInterface) => void;

export function useSuperAction(cb: Cb) {
	let action = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<ActionInterface | undefined>(
		undefined,
	);

	if (action === prevAction) return;

	setPrevAction(action);
	if (action) cb(action);
}

export function useAction(type: string, cb: Cb): ActionInterface | undefined {
	let action = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<ActionInterface | undefined>(
		undefined,
	);

	if (action === prevAction) return;

	if (type === action?.type) {
		setPrevAction(action);
		return action;
	}

	if (action) cb(action);
}
