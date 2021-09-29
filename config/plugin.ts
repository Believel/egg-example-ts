import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // 开启 view 插件
  handlebars: {
    enable: true,
    package: 'egg-view-handlebars'
  }
};

export default plugin;
