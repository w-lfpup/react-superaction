import React, { ReactNode, useEffect, useState } from "react";
import {
	SuperAction,
	ActionInterface,
	ActionEvent,
} from "@w-lfpup/superaction";

import { SuperContext } from "./context.js";

interface ProviderProps {
	eventNames: string[];
	children: ReactNode;
	host?: EventTarget;
	target?: EventTarget;
}

export function SuperActionProvider(props: ProviderProps) {
	let { eventNames, children, host = document, target } = props;
	let [value, setValue] = useState<ActionInterface | undefined>(undefined);

	useEffect(
		function () {
			let superAction = new SuperAction({
				infix: "-",
				host,
				target,
				eventNames,
			});

			function cb(e: Event) {
				if (e instanceof ActionEvent) setValue(e.action);
			}

			superAction.connect();
			host.addEventListener("#action", cb);

			return function () {
				superAction.disconnect();
				host.removeEventListener("#action", cb);
			};
		},
		[eventNames],
	);

	return (
		<SuperContext.Provider value={value}>{children}</SuperContext.Provider>
	);
}
