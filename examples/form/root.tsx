import React from "react";
import ReactDOM from "react-dom/client";
import { SuperAction } from "@w-lfpup/superaction";
import { SuperActionProvider } from "../../dist/mod.js";
import { Form } from "./form.js";


let rootEl = document.querySelector("#root");
if (rootEl) {
	let _superAction = new SuperAction({
		host: rootEl,
		eventNames: ["submit"],
		connected: true,
	});

	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<SuperActionProvider target={rootEl}>
			<Form />
		</SuperActionProvider>,
	);
}
