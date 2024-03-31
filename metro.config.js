// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
 resolver: {
    assetExts: defaultConfig.resolver.assetExts.concat(['cjs']), // Add "cjs" as an asset extension
    sourceExts: defaultConfig.resolver.sourceExts.concat(['js', 'jsx', 'ts', 'tsx']), // Ensure JavaScript and TypeScript files are resolved
 },
};

module.exports = mergeConfig(defaultConfig, config);
