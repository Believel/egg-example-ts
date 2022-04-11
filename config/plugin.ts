import { EggPlugin } from 'egg';
// import * as path from "path";

const plugin: EggPlugin = {
  // 开启 view 插件
  handlebars: {
    enable: true,
    package: 'egg-view-handlebars'
  },

  // !开启自定义的插件 在 /lib/plugin/xxx  下面定义的
  // 一般通过 path 来本地引入插件路径
  // ua: {
      // 开启此插件
  //   enable: true,
      // 本地引入
  //   path: path.join(__dirname, "../lib/plugin/egg-ua")
  // }

  // !独立插件的引入 一般通过 npm 下载的包
  // ua:{
  //   // 开启此插件
  //   enable: true,
  //   // 包名
  //   package: "egg-ua"
  // }

};

export default plugin;
