// vue.config.js
module.exports = {
    // これだとログが表示されなかった
    // publicPath: '/my-project/',
    publicPath: './',
    outputDir: 'docs'
}

// こっちかも
// module.exports = {
//     outputDir: 'docs',
//     assetsDir: './',
//     publicPath: './'
//   }