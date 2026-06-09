import { useContext, useState } from "react";
import { SuperContext } from "./context.js";
import { ActionInterface } from "@w-lfpup/superaction";

interface HookCallback {
	(action: ActionInterface): void;
}

export function useAction(cb: HookCallback, args?: [string]): void {
	let action = useContext(SuperContext);
	let [prevAction, setPrevAction] = useState<ActionInterface | undefined>(
		undefined,
	);

	if (action === prevAction) return;
	if (args && action && args[0] !== action.type) return;

	setPrevAction(action);
	if (action) cb(action);
}
