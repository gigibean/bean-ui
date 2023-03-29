import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import alias from '@rollup/plugin-alias';
import path from 'path';

const dependencies = ['polished', '@bean-ui/common', '@bean-ui/styled-engine'];

const getPlugins = () => [
  peerDepsExternal(),
  alias({
    entries: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
  }),
  typescript({
    tsconfig: 'tsconfig.json',
  }),
  svgr(),
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
    plugins: getPlugins(),
    preserveModules: true,
  },
];
