import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  format: 'cjs',
  dest: 'bundle.js',
  plugins: [
    resolve({ jsnext: true })
  ]
};
