module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@hooks': './src/hooks',
          '@context': './src/context',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './assets',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
