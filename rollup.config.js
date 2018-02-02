import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const umdConfig = ({ minify = false } = {}) => {
  const config = {
    input: 'src/index.js',
    output: {
      file: minify ? `dist/${pkg.name}.umd.min.js` : `dist/${pkg.name}.umd.js`,
      format: 'umd'
    },
    name: 'recurFreeze',
    plugins: [
      eslint({
        include: ['src/**'],
        throwOnError: true,
        throwOnWarning: true
      }),
      commonjs(),
      babel({ exclude: 'node_modules/**' })
    ]
  };

  if (minify) {
    config.plugins.push(uglify());
  }

  return config;
};

export default [
  umdConfig(),
  umdConfig({ minify: true }),
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      eslint({
        include: ['src/**'],
        throwOnError: true,
        throwOnWarning: true
      }),
      babel({ exclude: 'node_modules/**' })
    ]
  }
];
