const path = require('path');
const glob = require('glob');
const CopyPlugin = require('copy-webpack-plugin');
// const TerserMinimizer = require('terser-webpack-plugin');
const HtmlMinimizer = require('html-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  //entry arquivos que vão ser usados 
  entry: () => new Promise((resolve) => fetchAll(resolve)), 
  module: {
    rules: [
      {
        test: /\.js$/, // indica todos os arquivos que terminem com .js
        exclude: /node_modules/
      },
      {
        test: /\.css$/, // indica todos os arquivos que terminem com .css
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new CopyPlugin({
    patterns: [
      { from: "src", to: "src" }
    ]
  })],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizer(),
      // UGLIFYJS - não está mais sendo mantido
      // new TerserMinimizer({
      //   terserOptions: {

          // mangle: processo de alterar nome de funções, variaveis e parametros
          // ex: function fazAlgumaCoisa() { ... }   -> function x() {}
      //   }
      // })
    ]
  }
};

// listar todos os arquivos das pastas js e css
function fetchAll(callback) {
  glob("+(js|css)/**/*.+(js|css)", (err, files) => {
    console.log(files);
    return callback(files.map(f => "./" + f));
  })
}

//CLI = Command Line Interface

//Tree-shaking: verifica a árvore de dependencia das funções e elimina código não utilizado (dead code)