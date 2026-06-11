import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { ActionInterface, ActionEvent } from "@w-lfpup/superaction";

import { SuperContext } from "./context.js";

interface ProviderProps {
	children: ReactNode;
	target: EventTarget;
}

export function SuperActionProvider(props: ProviderProps) {
	let { children, target } = props;
	let [value, setValue] = useState<ActionInterface | undefined>(undefined);
	useEffect(
		function () {
			function cb(e: Event) {
				if (e instanceof ActionEvent) setValue(e.action);
			}

			target.addEventListener("#action", cb);

			return function () {
				target.removeEventListener("#action", cb);
			};
		},
		[target],
	);

	return (
		<SuperContext.Provider value={value}>{children}</SuperContext.Provider>
	);
}
