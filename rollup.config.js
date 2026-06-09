import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default [
	{
		input: "node_modules/@w-lfpup/superaction/dist/mod.js",
		output: {
			file: "examples/deps/superaction_bundled.js",
			format: "es",
		},
		plugins: [
			nodeResolve({
				browser: true,
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
		input: "examples/deps/react_exports.js",
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
		input: "examples/deps/react_dom_client_exports.js",
		output: {
			file: "examples/deps/react_dom_client_bundled.js",
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
			file: "examples/counter/bundled.js",
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
			file: "examples/form/bundled.js",
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
