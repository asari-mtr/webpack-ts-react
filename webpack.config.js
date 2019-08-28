var path = require('path');

module.exports = {
  mode: "development",

  entry: "./src/main.ts",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" },
        ],
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
