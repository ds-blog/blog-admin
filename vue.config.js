const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  devServer: {
    host: '127.0.0.1',
    port: '8081',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
    }

    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components')
        },
        // 省略后缀名
        extensions: ['.js', '.vue', '.json', '.ts','.scss'],
      }
    });
  },
  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~element-ui/packages/theme-chalk/src/common/var.scss";`
      },
    }
  }
}
