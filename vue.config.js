module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/lib/main.ts',
      builderOptions: {
        // options placed here will be merged with default configuration and passed to
        // electron-builder
      },
    },
  },
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.entry.app = './src/renderer/main.ts';
  },
};
