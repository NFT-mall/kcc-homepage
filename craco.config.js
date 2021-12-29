const { when } = require('@craco/craco')
const CracoLessPlugin = require('craco-less')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // config less variable here
            modifyVars: {
              '@primary-color': '#31D7A0',
              '@link-color': '#0fcd8c',
              '@logo-color': '#39E1A4',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 3000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 6,
        automaticNameDelimiter: '-',
        name: true,
        cacheGroups: {
          bn: {
            name: 'bn',
            test: /[\\/]node_modules[\\/]bn[\\/]/,
            priority: 70,
          },
          bignumber: {
            name: 'bignumber',
            test: /[\\/]node_modules[\\/]bignumber[\\/]/,
            priority: 20,
          },
          lodash: {
            name: 'lodash',
            test: /[\\/]node_modules[\\/]lodash[\\/]/,
            priority: 20,
          },
          moment: {
            name: 'moment',
            test: /[\\/]node_modules[\\/]moment[\\/]/,
            priority: 40,
          },
        },
      },
    },
    plugins: [
      ...when(
        process.env.NETWORK === 'main',
        () => [
          new TerserPlugin({
            sourceMap: true, // Must be set to true if using source-maps in production
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: {
                drop_console: process.env.NODE_ENV === 'production',
                drop_debugger: true,
                pure_funcs: process.env.NODE_ENV === 'production' ? ['console.log'] : '',
              },
            },
          }),
        ],
        []
      ),
      ...when(process.env.NETWORK === 'analysis', () => [new BundleAnalyzerPlugin()]),
    ],
  },
}
