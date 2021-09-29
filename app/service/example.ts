import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * 获取githun上用户信息
   * @param data
   */
  public async user() {
    const { config, ctx } = this;
    const response = await ctx.curl(config.DOMAIN, {
      dataType: "json"
    });
    return response.data;
  }
  /**
   * 获取github上用户仓库
   * @returns data
   */
  public async userRepos(page: number, per_page: number) {
    const { config, ctx } = this;
    const response = await ctx.curl(`${config.DOMAIN}/repos?page=${page}&per_page=${per_page}`, {
      dataType: "json"
    })
    return response.data
  }
  
}
