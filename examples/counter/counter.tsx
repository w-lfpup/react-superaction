import React, { useState } from "react";
import { useAction, useActionReducer } from "../../dist/mod.js";
import { ActionInterface } from "@w-lfpup/superaction";

export function Counter() {
	let [count, setCount] = useState(0);
	
	useActionReducer((action: ActionInterface) => {
		let { type } = action;
		console.log("from action reducer", action);
		if (type === "increment") {
			console.log(type)
			setCount(2);
		}
		if (type === "decrement") setCount((count) => count - 1);
	});

	return (
		<>
			<button click-="decrement">-</button>
			<button click-="increment">+</button>
			<p>{count}</p>
		</>
	);
}
