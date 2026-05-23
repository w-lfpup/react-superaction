import React from "react";
import ReactDOM from "react-dom/client";
import { SuperActionProvider } from "../../dist/mod.js";
import { CustomForm } from "./custom_form.js";

let eventNames: string[] = ["submit"];

let rootEl = document.querySelector("#root");
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<SuperActionProvider eventNames={eventNames}>
			<CustomForm />
		</SuperActionProvider>,
	);
}
