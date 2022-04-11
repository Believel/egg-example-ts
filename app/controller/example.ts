import { Controller } from "egg";

export default class ExampleController extends Controller {
  async userInfo() {
    const { ctx } = this;
    const data = await ctx.service.example.user();
    const renderData = {
      title: "练习",
      data: JSON.stringify(data)
    };
    // TODO 测试扩展插件、自定义插件、独立插件的使用
    console.log(ctx.isIOS(ctx));
    await ctx.render("example", renderData);
  }
  async userRepos() {
    const { ctx } = this;
    const { query } = ctx;
    const { page = 1, per_page = 10 } = query;
    const data = await ctx.service.example.userRepos(Number(page), Number(per_page));
    return data;
  }
}