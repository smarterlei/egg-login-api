'use strict';

const Controller = require('egg').Controller;
//MVC
// view 视图 模板
// controller 控制器 业务逻辑 控制器加载视图
// model 模型  service 与数据库 数据打交道


class addController extends Controller {
  //async index() {
     // 用户访问页面时 生成的秘钥
    // await this.ctx.render('add',{
    //   csrf:this.ctx.csrf
    // })
    //await this.ctx.render('add')
 
  //}

  async add() {        
    await this.service.home.registerPost(this.ctx.request.body)
  }

  async addUser(){
    await this.service.home.addUser(this.ctx.request.body)
  }
  async editUser(){
    await this.service.home.editUser(this.ctx.request.body)
  }
  async delUser(){
    await this.service.home.delUser(this.ctx.request.body)
  }
}

module.exports = addController;

 
