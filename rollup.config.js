import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default [
	{
	input: 'examples/deps/react.js',
	output: {
		file: 'examples/deps/react_bundled.js',
		format: 'es'
	},
	plugins: [
		nodeResolve({
			extensions: ['.js', '.jsx']
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			'process.env.NODE_ENV': '"development"'
		})
	]
},
	{
	input: 'examples/deps/redux.js',
	output: {
		file: 'examples/deps/redux_bundled.js',
		format: 'es'
	},
	plugins: [
		nodeResolve({
			extensions: ['.js', '.jsx']
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			'process.env.NODE_ENV': '"development"'
		})
	]
},
	{
	input: 'examples/counter/root.js',
	output: {
		file: 'examples/counter/bundle.js',
		format: 'es'
	},
	plugins: [
		nodeResolve({
			extensions: ['.js', '.jsx']
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			'process.env.NODE_ENV': '"development"'
		})
	]
},
{
	input: 'examples/form/root.js',
	output: {
		file: 'examples/form/bundle.js',
		format: 'es'
	},
	plugins: [
		nodeResolve({
			extensions: ['.js', '.jsx']
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			'process.env.NODE_ENV': '"development"'
		})
	]
}]