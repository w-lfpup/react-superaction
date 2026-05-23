import React, { useState } from "react";
import { useAction, useSuperAction } from "../../dist/mod.js";
import { ActionInterface } from "@w-lfpup/superaction";

export function Counter() {
	let [count, setCount] = useState(0);

	useSuperAction((action: ActionInterface) => {
		let { type } = action;
		if (type === "increment") setCount((count) => count + 1);
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
