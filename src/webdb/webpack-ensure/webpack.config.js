module.exports = {
  entry: "./main.js",
  output: {
    path          : __dirname + '/dist',
    filename      : "bundle.js",
    chunkFilename : "[id].chunk.js",
    publicPath    : 'dist/'
  }
};
