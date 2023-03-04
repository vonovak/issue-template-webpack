const LOOSE = false;

module.exports = function babel(api) {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', {
        targets: {
          node: '16',
        },
        useBuiltIns: 'entry',
        corejs: 3,
      }],
      '@babel/preset-typescript',
      ['@babel/preset-react', {
        runtime: 'automatic',
      }],
    ],
    plugins: [
      ["react-native-web"],
      'macros',
      '@babel/plugin-transform-flow-strip-types',
    ],
  };
};
