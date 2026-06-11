# react-superaction

Turn the virtual-dom into a declarative event-bus.

(a port of [superaction](https://github.com/w-lfpup/superaction-js) for React)

## Install

Install via npm.

```sh
npm install --save-dev @w-lfpup/react-superaction
```

Or install directly from github.

```sh
npm install --save-dev https://github.com/w-lfpup/react-superaction
```

## Setup

Add a `SuperActionProvider` component to broadcast action events.

The `SuperActionProvider` component below listens for click events. React developers can access action events.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";

import { SuperAction } from "@w-lfpup/superaction";
import { SuperActionProvider } from "@w-lfpup/react-superaction";
import { Counter } from "./counter.js";

let rootEl = document.querySelector("#root")!;

let _superAction = new SuperAction({
	host: rootEl,
	eventNames: ["click"],
	connected: true,
	infix: "-", // react-safe-html-attributes
});

const root = ReactDOM.createRoot(rootEl);
root.render(
	<SuperActionProvider target={rootEl}>
		<Counter />
	</SuperActionProvider>,
);
```

## Declare

Add an attribute with the pattern `event-=action`.

```html
<button click-="increment">+</button>
```

Now the button dispatches ActionEvents when clicked.

## Listen

The `useAction` hook connects action events to react-land.

```tsx
import React, { useState } from "react";
import { useAction } from "@w-lfpup/react-superaction";

export function Counter() {
	let [count, setCount] = useState(0);

	useAction((action) => {
		if ("increment" === action.type) setCount(count + 1);
	});

	return <button click-="increment">{count}</button>;
}
```

An action has several properties related to an action event including:

- the action type
- the original dom event
- the action event target
- associated formData

```ts
let { type, event, target, formData } = action;
```

Form data is available when an action event originates from a element.

## Event stacking

`Superaction-js` listens to any DOM event that bubbles. It also dispatches all actions found along the composed path of a DOM event.

Turns out that's [all UI Events](https://www.w3.org/TR/uievents/#events-uievents). Which is a lot of events!

Consider the following example:

```html
<body click-="A">
	<div click-="B">
		<button click-="C">hai :3</button>
	</div>
</body>
```

When a person clicks the button above, the order of action events is:

- Action "C"
- Action "B"
- Action "A"

## Propagation

Action events propagate similar to DOM events. Their declarative API reflects their DOM Event counterpart:

- `event-prevent-default`
- `event-stop-propagation`
- `event-stop-immediate-propagation`

Consider the following example:

```html
<body click-="A" click-stop-immediate-propagation>
	<section click-="B" click-prevent-default>
		<button click-="C">UwU</button>
		<button click-="D" click-stop-propagation>^_^</button>
	</section>
</body>
```

So when a person clicks the buttons above, the order of actions is:

Click button C:

- Action "C" dispatched
- `preventDefault()` is called on the original `PointerEvent`
- Action "B" dispatched
- Action propagation is stopped similar to `event.stopImmediatePropagation()`
- Action "A" does _not_ dispatchß

Click button D:

- Action "D" dispatched
- Action event propagation stopped similar to `event.stopPropagation()`

## Discrepencies

JSX and consequently React does not follow HTML spec. It transpiles HTML-looking
syntax into a series of calls to a `pragma` function. It calls the function
as many times as there are gator tags `<` declared.

In `superaction` the syntax looks like:

```html
<button click:="do_something">click me!</button>
```

HTML considers `: _ @` all valid characters for attributes. It's very flexible.

React / JSX is not HTML and restricts attribute characters to `-` and also `_`
but only AFTER a `-`.

So the syntax for `superaction` in react is limited to:

```html
<button click-="do_something">click me!</button>
```

## License

React-superaction is released under the BSD-3 Clause License.
