var CommonsChunk = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    'section-a': './section-a-entry',
    'section-b': './section-b-entry',
    'section-c': './section-c-entry'
  },
  output: {
    path     : __dirname + '/dist',
    filename : "[name].bundle.js"
  },
  plugins: [
    new CommonsChunk('commons.js',
       ['section-a', 'section-b', 'section-c'])
  ]
};
