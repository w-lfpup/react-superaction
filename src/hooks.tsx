import { useContext, useState } from "react";
import { SuperContext } from "./context.js";
import { ActionInterface } from "@w-lfpup/superaction";

interface Cb {
	(action: ActionInterface): void;
}

export function useSuperAction(cb: Cb): void {
	let action = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<ActionInterface | undefined>(
		undefined,
	);

	if (action === prevAction) return;

	setPrevAction(action);
	if (action) cb(action);
}

export function useActionSelector(cb: Cb, args: [string]): void {
	let action = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<ActionInterface | undefined>(
		undefined,
	);

	if (!action || action === prevAction || args[0] === action?.type) return;

	setPrevAction(action);
	if (action) cb(action);
}
