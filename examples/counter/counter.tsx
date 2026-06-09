import React, { useState } from "react";
import { useAction } from "../../dist/mod.js";

export function Counter() {
	let [count, setCount] = useState(0);

	useAction((action) => {
		let { type } = action;
		if (type === "increment") setCount(count + 1);
		if (type === "decrement") setCount(count - 1);
	});

	return (
		<>
			<button click-="decrement">-</button>
			<button click-="increment">+</button>
			<p>{count}</p>
		</>
	);
}
