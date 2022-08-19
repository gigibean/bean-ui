import { babel } from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import visualizer from 'rollup-plugin-visualizer';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
// import dts from 'rollup-plugin-dts';
import path from 'path';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const dependencies = ['polished', '@bean-ui/common', '@bean-ui/styled-engine'];

const getPlugins = (format) => [
  peerDepsExternal(),
  alias({
    entries: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
  }),
  typescript({
    clean: true,
    typescript: require('ttypescript'),
    tsconfigDefaults: {
      compilerOptions: {
        plugins: [
          { transform: 'typescript-transform-paths' },
          { transform: 'typescript-transform-paths', afterDeclarations: true },
        ],
      },
    },
  }),
  svgr(),
  json(),
  nodeResolve({
    extensions,
  }),
  commonjs({ extensions: ['.js', '.ts'] }),
  babel({
    babelHelpers: 'bundled',
    extensions,
    comments: false,
  }),
  process.env.RUNNING_ENV === 'analyze' && format === 'cjs'
    ? visualizer({
        sourcemap: false,
        bundlesRelative: false,
        open: true,
        gzipSize: true,
        template: 'treemap', // sunburst, treemap, circlepacking, network
      })
    : undefined,
];

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
    external: dependencies,
    plugins: getPlugins('esm'),
    preserveModules: true,
  },
];
