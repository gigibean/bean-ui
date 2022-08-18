import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import visualizer from 'rollup-plugin-visualizer';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
// const dependencies = ['react'];

const getPlugins = (format) => [
  peerDepsExternal(),
  // url(),
  svgr(),
  // image(),
  typescript(),
  json(),
  nodeResolve({
    extensions,
  }),
  commonjs({ extensions: ['.js', '.ts'] }),
  babel({
    babelHelpers: 'bundled',
    extensions,
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
    // external: dependencies,
    plugins: getPlugins('esm'),
    preserveModules: true,
  },
];
