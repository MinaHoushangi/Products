module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
