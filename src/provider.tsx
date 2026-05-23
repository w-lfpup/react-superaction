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

export function SuperProvider(props: ProviderProps) {
	let { eventNames, children } = props;
	let [value, setValue] = useState<ActionInterface | undefined>(undefined);

	useEffect(function () {
		let superAction = new SuperAction({
			host: document,
			infix: "-",
			connected: true,
			eventNames,
		});

		let cb = function (e: ActionEventInterface) {
			setValue(e.action);
		};

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
