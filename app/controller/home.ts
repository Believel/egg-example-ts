import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
    ctx.logger.info("ctx logger");
    console.log(ctx.request.url);
    
    await ctx.render("page.hbs", {});
  }
}
