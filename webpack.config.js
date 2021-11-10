const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    bundle: ["./src/mod.js"],
  },
  resolve: {
    extensions: [".mjs", ".js"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
    library: "__MODULE_DEFAULT_EXPORT__",
    libraryTarget: "window",
    libraryExport: "default",
  },
  module: {
    rules: [],
  },
  mode,
  plugins: [],
  devtool: prod ? false : "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  target: "web",
  externals: [
    (context, request, callback) => {
      if (request.startsWith("_webpack_ignored_")) {
        return callback(null, "commonjs2 " + request);
      }
      callback();
    },
  ],
};
