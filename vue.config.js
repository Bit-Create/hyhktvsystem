module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/componetns',
        'views': '@/views',
        'network': '@/network'
      }
    }
  }
}