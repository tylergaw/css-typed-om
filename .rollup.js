import terser from "@rollup/plugin-terser";

export default {
  input: "index.js",
  output: [{ file: "./demo/css-typed-om-polyfill.js", format: "es" }],
  plugins: [terser({ mangle: false })],
};
