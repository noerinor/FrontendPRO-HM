const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/main.js',  // Вхідний файл вашого додатка
  output: {
    filename: 'main.js',  // Назва вихідного файлу
    path: path.resolve(__dirname, 'dist')  // Директорія виведення
    
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),],


  module: {
    rules: [
      //JAVASCRIPT
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      // SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      // LESS
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "less-loader",
        ],
      },
    ]
  },
};

