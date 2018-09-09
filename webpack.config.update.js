const IS_DEV = process.env.NODE_ENV !== 'production';
const rootSrc = __dirname + '/src';

module.exports = (config) => {

  console.log(config.module.rules[2]);

  config = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        components: rootSrc + '/components',
        common: rootSrc + '/common',
        pages: rootSrc + '/pages',
        store: rootSrc + '/store',
      }
    },
  };

  return config;
};