import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632468804078_9013';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    DOMAIN: 'https://api.github.com/users/believel',
    // view 配置
    view: {
      // 默认模板引擎
      defaultViewEngine: 'handlebars',
      // 默认扩展名
      defaultExtension: ".hbs",
      // 设置 模板扩展名为 .hbs 设置为用 handlebars 引擎
      mapping: {
        '.hbs': 'handlebars'
      }
    }
  };
  // modify config port
  config.cluster = {
    listen: {
      path: "",
      port: "7002",
      hostname: "0.0.0.0"
    }
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
