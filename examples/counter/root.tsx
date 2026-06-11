import React from "react";
import ReactDOM from "react-dom/client";
import { SuperAction } from "@w-lfpup/superaction";
import { SuperActionProvider } from "../../dist/mod.js";
import { Counter } from "./counter.js";

let rootEl = document.querySelector("#root");
if (rootEl) {
	let _superAction = new SuperAction({
		host: rootEl,
		eventNames: ["click"],
		connected: true,
		infix: "-", // react safe
	});

	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<SuperActionProvider target={rootEl}>
			<Counter />
		</SuperActionProvider>,
	);
}
