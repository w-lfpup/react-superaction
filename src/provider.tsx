import React, { Context, ReactNode, useEffect, useState } from "react";
import { SuperAction, SuperActionParamsInterface, ActionInterface, ActionEventInterface } from "@w-lfpup/superaction"

interface ProviderProps {
	eventNames: string[];
	children: ReactNode;
}

export function Provider(props: ProviderProps) {
	let {eventNames, children} = props;
	let [contextValue, setContextValue] = useState<ActionInterface | undefined>(undefined);

	useEffect(function() {
		let superAction = new SuperAction({
			host: document,
			infix: "_",
			connected: true,
			eventNames,
		});

		let cb = function(e: ActionEventInterface) {
			setContextValue(e.action)
		}
		document.addEventListener("#action", cb);

		return function() {
			superAction.disconnect();
			document.removeEventListener("#action", cb);

		}
	}, []);

	let Context = React.createContext(null);

	return <Context.Provider value={null}>{children}</Context.Provider>
}
