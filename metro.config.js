// eslint-disable-next-line import/no-extraneous-dependencies
const { getDefaultConfig } = require('@expo/metro-config')
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname)
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
    blacklistRE: blacklist([/.bit\/.*/]),
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg', 'ts', 'tsx', 'jsx', 'js', 'json']
    },
  }
})()
