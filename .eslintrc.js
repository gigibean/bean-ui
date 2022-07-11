module.exports = {
  root: true, // So parent files don't get applied
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['react', 'eslint-plugin-react-hooks', '@typescript-eslint/eslint-plugin'],

  /**
   * Sorted alphanumerically within each group. built-in and each plugin form
   * their own groups.
   */
  rules: {
    // Stylistic opinion
    'arrow-body-style': 'off',
    // keep `this` consistent with `self` or invoke error
    'consistent-this': ['error', 'self'],
    // curly body even single line
    curly: ['error', 'all'],
    // to be able to create multi classes or components in a file
    'max-classes-per-file': 'off',
    'max-components-per-file': 'off',
    // disallow the use of alert, confirm
    // use custom alert, confirm
    'no-alert': 'error',
    // Allow warn and error for dev environments
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // to avoid assignment to function parameters
    // but it's ok
    'no-param-reassign': 'off',
    // Airbnb use warn https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L97
    // but eslint recommands error
    // requires function expressions to have a name
    'func-names': 'error',
    // disallows constant expressions in the test condition of
    'no-constant-condition': 'error',
    // Use the proptype inheritance chain
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'error',
    // enforce a consistent location for single-line statements
    // or use curly
    'nonblock-statement-body-position': 'error',
    // arrow callback with name
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],

    'prefer-destructuring': 'off',

    // allows only dot notation unless [] is needed
    '@typescript-eslint/dot-notation': 'off',
    'dot-notation': 'error',
    '@typescript-eslint/no-implied-eval': 'off',
    'no-implied-eval': 'error',
    '@typescript-eslint/no-throw-literal': 'off',
    'no-throw-literal': 'error',
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/return-await.md
    '@typescript-eslint/return-await': 'off',
    'no-return-await': 'error',

    // We are a library, we need to support it too
    'jsx-a11y/no-autofocus': 'off',

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    // ensure that any prop in defaultProps has a non-required type definition
    'react/default-props-match-prop-types': [
      'error',
      {
        // Otherwise the rule thinks inner props = outer props
        // But in TypeScript we want to know that a certain prop is defined during render
        // while it can be ommitted from the callsite.
        // Then defaultProps (or default values) will make sure that the prop is defined during render
        allowRequiredDefaults: true,
      },
    ],
    // Can add verbosity to small functions making them harder to grok.
    // Though we have to manually enforce it for function components with default values.
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off', // Too strict
    'react/jsx-curly-brace-presence': 'off', // broken
    // airbnb is using .jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-fragments': 'off',
    // Enforces premature optimization
    'react/jsx-no-bind': 'off',
    // We are a UI library.
    'react/jsx-props-no-spreading': 'off',
    // This rule is great for raising people awareness of what a key is and how it works.
    'react/no-array-index-key': 'off',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    // Not always relevant
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error',
    // This depends entirely on what you're doing. There's no universal pattern
    'react/state-in-constructor': 'off',
  },
};
