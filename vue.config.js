const path = require("path")

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, "./src/assets/globalStyles/_colors.scss")]
        }
    }
}