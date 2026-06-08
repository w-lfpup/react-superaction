import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default [
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
