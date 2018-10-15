// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    rules: {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': 0,
        'require-jsdoc': [ 'error', {
            'require': {
                'ArrowFunctionExpression': false,
                'FunctionDeclaration': true,
                'MethodDefinition': false,
                'ClassDeclaration': false,
            }
        }],
        'semi-spacing': [ 'error', {
            'before': false,
            'after': true
        }],
        'no-trailing-spaces': [ 'error' , {
            'skipBlankLines': true
        }],
        'space-before-blocks': [ 'error', 'always' ],
        'space-infix-ops': [ 'error', {
            'int32Hint': true
        }],
        'space-before-function-paren': [ 'error', {
            'anonymous': 'always',
            'named': 'always',
            'asyncArrow': 'ignore'
        }],
        'array-bracket-spacing': [ 'error', 'always' ],
        'comma-spacing': [ 'error', {
            'before': false,
            'after': true
        }],
        'max-statements-per-line': [ 'error', {
            'max': 1
        }],
        'newline-per-chained-call': [ 'error', {
            'ignoreChainWithDepth': 4
        }],
        'object-curly-spacing': [ 'error', 'always' ],
        'comma-style': [ 'error',  'last' ],
        'quotes': [ 'error', 'single' ],
        'dot-notation': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'camelcase': 'error',
        'no-multiple-empty-lines': [ 'error', {
            'max': 2,
            'maxBOF': 1,
            'maxEOF': 1
        }],
        'object-property-newline': 0,
        'vue/script-indent': [ 'error', 4, {
            'baseIndent': 1,
            'switchCase': 1
        }],
        'vue/no-parsing-error': [ 2, {
            'x-invalid-end-tag': false
        }]
    }
}
