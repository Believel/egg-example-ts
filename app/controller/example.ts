import { Controller } from "egg";

export default class ExampleController extends Controller {
  async userInfo() {
    const { ctx } = this;
    const data = await ctx.service.example.user();
    const renderData = {
      title: "练习",
      data: JSON.stringify(data)
    };
    await ctx.render("example", renderData);
  }
  async userRepos() {
    const { ctx } = this;
    const { query } = ctx;
    const { page = 1, per_page = 10 } = query;
    const data = await ctx.service.example.userRepos(page, per_page);
    return data;
  }
}