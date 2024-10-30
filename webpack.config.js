const path = require('path')

module.exports = {
 entry: './src/index.tsx',
 module: {
   rules: [
     {
       test: /\.(ts|tsx)$/,
       use: 'ts-loader',
       exclude: /node_modules/
     },
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
     },
     {
       test: /\.css$/,
       use: ["style-loader", "css-loader"]
     },
     {
       test: /\.(pdf|jpg|png|gif|svg|ico)$/,
       use: [
         {
           loader: 'url-loader'
         },
       ]
     },
     {  
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       loader: "file-loader"
     }
   ]
 },
 resolve: {
   extensions: ['.tsx', '.ts', '.js', '.jsx']
 },
 output: {
   path: __dirname + '/dist',
   publicPath: '/',
   filename: 'bundle.js'
 },
 devServer: {
   static: {
     directory: path.join(__dirname, 'dist')
   }
 }
};