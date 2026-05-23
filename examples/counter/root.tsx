import React from "react";
import ReactDOM from "react-dom/client";
import { SuperActionProvider } from "../../dist/mod.js";
import { Counter } from "./counter.js";

let eventNames: string[] = ["click"];

let rootEl = document.querySelector("#root");
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<SuperActionProvider eventNames={eventNames}>
			<Counter />
		</SuperActionProvider>,
	);
}
