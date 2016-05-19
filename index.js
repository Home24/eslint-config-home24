module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/legacy',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/strict',
        './rules/react',
        './rules/react-a11y'
    ].map(require.resolve),
    env: {
        es6: true,
        node: true,
        mocha: true,
        browser: true,
        amd: false,
        jasmine: false
    },
    rules: {},
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
    },
    ecmaFeatures: {},
    globals: {}
};
