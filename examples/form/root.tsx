import React from "react";
import ReactDOM from "react-dom/client";
import { SuperActionProvider } from "../../dist/mod.js";
import { Form } from "./form.js";

let eventNames: string[] = ["submit"];

let rootEl = document.querySelector("#root");
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<SuperActionProvider eventNames={eventNames}>
			<Form />
		</SuperActionProvider>,
	);
}
