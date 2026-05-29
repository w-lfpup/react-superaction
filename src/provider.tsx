import React, { ReactNode, useEffect, useState } from "react";
import {
	SuperAction,
	ActionInterface,
	ActionEventInterface,
} from "@w-lfpup/superaction";

interface ProviderProps {
	eventNames: string[];
	children: ReactNode;
}

export const SuperContext = React.createContext<ActionInterface | undefined>(
	undefined,
);

export function SuperActionProvider(props: ProviderProps) {
	let { eventNames, children } = props;
	let [value, setValue] = useState<ActionInterface | undefined>(undefined);

	useEffect(function () {
		let superAction = new SuperAction({
			host: document,
			infix: "-",
			eventNames,
		});

		function cb(e: ActionEventInterface) {
			setValue(e.action);
		}

		superAction.connect();
		document.addEventListener("#action", cb);

		return function () {
			superAction.disconnect();
			document.removeEventListener("#action", cb);
		};
	}, []);

	return (
		<SuperContext.Provider value={value}>{children}</SuperContext.Provider>
	);
}
