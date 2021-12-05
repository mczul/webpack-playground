const common = require('./webpack.common.config');
const {merge} = require('webpack-merge');

const dev = {
    mode: 'development',
    optimization: {
        minimizer: []
    },
}

module.exports = merge(common, dev);