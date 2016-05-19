# eslint-config-home24

This package provides Home24's .eslintrc as an extensible shared config.
Config is based on Airbnb rules.

## Usage

### eslint-config-home24

Default export contains all of ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. `npm install --save-dev eslint-config-home24 eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. add `"extends": "home24"` to your .eslintrc

### eslint-config-home24/legacy

1. `npm install --save-dev eslint-config-home24 eslint-plugin-import eslint`
2. add `"extends": "home24/legacy"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
