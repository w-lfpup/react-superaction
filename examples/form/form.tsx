import React, { useState } from "react";
import { useSuperAction, useAction } from "../../dist/mod.js";
import { ActionInterface } from "@w-lfpup/superaction";

export function Form() {
	let [formAsJSON, setFormAsJSON] = useState<string>("");

	useSuperAction((action: ActionInterface) => {
		let { type, formData } = action;
		if (type === "submit_form" && formData) {
			let entries = Object.fromEntries(formData.entries());
			setFormAsJSON(JSON.stringify(entries, undefined, " "));
		}
	});

	return (
		<>
			<form submit-="submit_form" submit-prevent-default="">
				<input type="email" name="email" />
				<br />
				<input type="password" name="password" />
				<br />
				<button type="submit">let's go!</button>
			</form>
			<pre>{formAsJSON}</pre>
		</>
	);
}
