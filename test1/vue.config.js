var path = require('path')
const webpack = require('webpack')

module.exports = { //path.resolve(__dirname, '../resources/static')
  publicPath: '',
  outputDir: path.resolve(__dirname, '../docs'),
  indexPath: './index.html',
  lintOnSave: 'warning',
  productionSourceMap: false,
  css: {
    // requireModuleExtension: true,
    // extract: process.env.NODE.ENV === 'production',
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 给 sass-loader 传递选项
      },
      css: {
        // 这里的选项会传递给css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  configureWebpack: {
    plugins: []
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'test'
        return args
      })
      .end()
      .module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 390*1024,
          name: '/image/[name].[hash:8].[ext]'
        })
        .end()
        .rule('media')
        .test(/\.(mp4)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .options({
          name: '/media/[name].[ext]'
        })

  },
  devServer: {
    port: 80,
    hotOnly: true, // 热更新
    overlay: {
      warnings: false,
      errors: false
    },
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://10.246.204.103:1782',
        secure: false,
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
  }
}
