const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin(),],
  mode: 'production',
  devtool: '',
  entry: './src/index.jsx',
  output: {
    filename: 'clientbundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
      }
    }
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", options: {modules: true, exportOnlyLocals: false}
          }
        ]
      }
    ]
  }
};