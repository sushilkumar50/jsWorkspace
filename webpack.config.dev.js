import path from 'path';

export default {
  mode: "development",
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
    ]
  }
}
