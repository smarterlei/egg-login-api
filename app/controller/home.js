'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
   /**
 * @Controller 用户中心
 */
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, 欢迎来到我的第一个egg-App';     
    // var list= await   this.service.news.getNewsList()
    await this.ctx.render('home')
    await this.service.home.register()
  }
   /**
      * @summary 用户列表
      * @description 测试swagger文档 
      * @router get /userlist
      * @request params number currentPage 页码 1
      * @request params number pageSize 单页数量 5
      * @response 200 testResponse
      */
  async user() {
    const { currentPage = 1, pageSize = 5 } = this.ctx.query;
    const data = await this.service.user.getData(this.ctx.query)
    this.ctx.body = data
    
  }
   /**
      * @summary 用户登录
      * @description 测试swagger文档 
      * @router post /login
      * @request params string username 
      * @request params string password  
      * @response 200 testResponse
      */
  async login(){
  
    // this.ctx.body='login is develop ing'
    console.log(this.ctx.request.body,'====')
    await this.service.user.login(this.ctx.request.body)
  }

}

module.exports = HomeController;
