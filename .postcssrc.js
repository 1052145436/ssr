// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    'plugins': {
        'postcss-import': {},
        'autoprefixer': {
            browsers: [ '> 3%', 'ie >= 10' ]
        },
        'postcss-discard-comments': {
            removeAll: true
        }
    }
}
