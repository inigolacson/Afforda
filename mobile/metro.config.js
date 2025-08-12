const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add TypeScript support for node_modules
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'cjs',
  'ts',
  'tsx',
];

module.exports = config;