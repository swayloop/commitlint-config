import swayloopConfig from '@swayloop/eslint-config';

export default [
  ...swayloopConfig,
  {
    files: ['index.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
];
