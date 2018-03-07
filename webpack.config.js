var path = require("path");

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-libname.js',
      library: 'lib_name',
      libraryTarget: 'umd'
   },
   //All the peer dependency
   externals: {
      underscore: {
         commonjs: 'underscore',
         commonjs2: 'underscore',
         amd: 'underscore',
         root: '_'
      }
   }
}