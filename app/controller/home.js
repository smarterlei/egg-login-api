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
      * @request query number *currentPage eg:1
      * @request query number *pageSize eg:5
      * @request query string name null
      * @response 200 testResponse
      */
  async user() {
    // const { currentPage = 1, pageSize = 5 } = this.ctx.query;
    console.log(this.ctx.query,' on node user api')
    const data = await this.service.user.getUserData(this.ctx.query)
    this.ctx.body = data
    
  }

  async getInfo(){
    this.ctx.body ={
      "msg": "操作成功",
      "code": 200,
      "permissions": [
          "*:*:*"
      ],
      "roles": [
          "admin"
      ],
      "user": {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2021-07-22 13:53:45",
          "updateBy": null,
          "updateTime": null,
          "remark": "管理员",
          "params": {},
          "userId": 1,
          "deptId": 100,
          "deptName": null,
          "userName": "admin",
          "nickName": "系统管理员",
          "email": "system@163.com",
          "phonenumber": "15888888888",
          "sex": "1",
          "avatar": "/profile/avatar/2021/09/01/ae795a7e-ef78-4acf-ac55-9bff36a9a7a3.jpeg",
          "salt": null,
          "status": "0",
          "delFlag": "0",
          "loginIp": "192.168.1.144",
          "loginDate": "2022-07-13T10:38:10.544+0800",
          "dept": {
              "searchValue": null,
              "createBy": null,
              "createTime": null,
              "updateBy": null,
              "updateTime": null,
              "remark": null,
              "params": {},
              "deptId": 100,
              "parentId": 0,
              "ancestors": null,
              "deptName": "涧光股份",
              "orderNum": "0",
              "leader": "1",
              "children": []
          },
          "roles": [
              {
                  "params": {},
                  "roleId": 1,
                  "roleName": "超级管理员",
                  "roleKey": "admin",
                  "roleSort": "1",
                  "dataScope": "1",
                  "status": "0",
              }
          ],
          "roleIds": null,
          "roleNames": null,
          "postIds": null,
          "postNames": null,
          "roleId": null,
          "admin": true
      }
    }
  }
  async getRouters(){
    this.ctx.body = {
      "msg": "操作成功",
      "code": 200,
      "data": [
          {
              "name": "Customer",
              "path": "/customer",
              "hidden": false,
              "redirect": "noRedirect",
              "component": "Layout",
              "alwaysShow": true,
              "meta": {
                  "title": "客户",
                  "icon": "user",
                  "noCache": false,
                  "link": null
              },
              "children": [
                  {
                      "name": "Customers",
                      "path": "customers",
                      "hidden": false,
                      "component": "customers/index",
                      "meta": {
                          "title": "客户",
                          "icon": "list",
                          "noCache": false,
                          "link": null
                      }
                  }
              ]
          },
 
      ]
  }
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
