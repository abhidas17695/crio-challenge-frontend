module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query:{
        presets:['react','es2015','stage-1']
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]'
    },
    {
      test:/\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
      loader:'url-loader'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port:"8600"

  }
};
