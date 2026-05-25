import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default [
	{
		input: "node_modules/react/index.js",
		output: {
			file: "examples/deps/react_bundled.js",
			format: "es",
		},
		plugins: [
			nodeResolve({
				extensions: [".js", ".jsx"],
			}),
			commonjs(),
			replace({
				preventAssignment: false,
				"process.env.NODE_ENV": '"development"',
			}),
		],
	},
	{
		input: "node_modules/react-dom/client.js",
		output: {
			file: "examples/deps/reactdom_client_bundled.js",
			format: "es",
		},
		plugins: [
			nodeResolve({
				extensions: [".js", ".jsx"],
			}),
			commonjs(),
			replace({
				preventAssignment: false,
				"process.env.NODE_ENV": '"development"',
			}),
		],
	},
	{
		input: "node_modules/@reduxjs/toolkit/dist/redux-toolkit.browser.mjs",
		output: {
			file: "examples/deps/redux_bundled.js",
			format: "es",
		},
		plugins: [
			nodeResolve({
				extensions: [".js", ".jsx"],
			}),
			commonjs(),
			replace({
				preventAssignment: false,
				"process.env.NODE_ENV": '"development"',
			}),
		],
	},
	{
		input: "examples/counter/root.js",
		output: {
			file: "examples/counter/bundle.js",
			format: "es",
		},
		plugins: [
			nodeResolve({
				extensions: [".js", ".jsx"],
			}),
			commonjs(),
			replace({
				preventAssignment: false,
				"process.env.NODE_ENV": '"development"',
			}),
		],
	},
	{
		input: "examples/form/root.js",
		output: {
			file: "examples/form/bundle.js",
			format: "es",
		},
		plugins: [
			nodeResolve({
				extensions: [".js", ".jsx"],
			}),
			commonjs(),
			replace({
				preventAssignment: false,
				"process.env.NODE_ENV": '"development"',
			}),
		],
	},
];
