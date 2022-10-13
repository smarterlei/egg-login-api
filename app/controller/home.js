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
          {
            "name": "System",
            "path": "/system",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
              "title": "系统管理",
              "icon": "system",
              "noCache": false,
              "link": null
            },
            "children": [
              {
                "name": "User",
                "path": "user",
                "hidden": false,
                "component": "system/user/index",
                "meta": {
                  "title": "用户管理",
                  "icon": "user",
                  "noCache": false,
                  "link": null
                }
              },
              {
                "name": "Role",
                "path": "role",
                "hidden": false,
                "component": "system/role/index",
                "meta": {
                  "title": "角色管理",
                  "icon": "peoples",
                  "noCache": false,
                  "link": null
                }
              },
              {
                "name": "Menu",
                "path": "menu",
                "hidden": false,
                "component": "system/menu/index",
                "meta": {
                  "title": "菜单管理",
                  "icon": "tree-table",
                  "noCache": false,
                  "link": null
                }
              },
              {
                "name": "Dept",
                "path": "dept",
                "hidden": false,
                "component": "system/dept/index",
                "meta": {
                  "title": "部门管理",
                  "icon": "tree",
                  "noCache": false,
                  "link": null
                }
              },
              {
                "name": "Post",
                "path": "post",
                "hidden": false,
                "component": "system/post/index",
                "meta": {
                  "title": "岗位管理",
                  "icon": "post",
                  "noCache": false,
                  "link": null
                }
              },
 
 
              {
                "name": "Notice",
                "path": "notice",
                "hidden": false,
                "component": "system/notice/index",
                "meta": {
                  "title": "通知公告",
                  "icon": "message",
                  "noCache": false,
                  "link": null
                }
              },
              {
                "name": "Log",
                "path": "log",
                "hidden": false,
                "redirect": "noRedirect",
                "component": "ParentView",
                "alwaysShow": true,
                "meta": {
                  "title": "日志管理",
                  "icon": "log",
                  "noCache": false,
                  "link": null
                },
                "children": [
                  {
                    "name": "Operlog",
                    "path": "operlog",
                    "hidden": false,
                    "component": "monitor/operlog/index",
                    "meta": {
                      "title": "操作日志",
                      "icon": "form",
                      "noCache": false,
                      "link": null
                    }
                  },
                  {
                    "name": "Logininfor",
                    "path": "logininfor",
                    "hidden": false,
                    "component": "monitor/logininfor/index",
                    "meta": {
                      "title": "登录日志",
                      "icon": "logininfor",
                      "noCache": false,
                      "link": null
                    }
                  }
                ]
              }
            ]
          }
 
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

  async logout(){
  
    // this.ctx.body='login is develop ing'
    this.ctx.body= {
      code:200
    }
  }

  async deptTree(){
    this.ctx.body= {
       "msg": "操作成功",
       "code": 200,
       "data": [
           {
               "id": 100,
               "label": "涧光集团",
               "children": [
                   {
                       "id": 101,
                       "label": "涧光股份",
                       "children": [
                           {
                               "id": 103,
                               "label": "公司高层"
                           },
                           {
                               "id": 104,
                               "label": "董事会办公室"
                           },
                           {
                               "id": 105,
                               "label": "行政部",
                               "children": [
                                   {
                                       "id": 110,
                                       "label": "基建办公室"
                                   },
                                   {
                                       "id": 111,
                                       "label": "外联办公室"
                                   },
                                   {
                                       "id": 112,
                                       "label": "档案中心"
                                   },
                                   {
                                       "id": 113,
                                       "label": "行政办公室"
                                   }
                               ]
                           },
                           {
                               "id": 106,
                               "label": "财务部门"
                           },
                           {
                               "id": 107,
                               "label": "人力资源部",
                               "children": [
                                   {
                                       "id": 115,
                                       "label": "COE"
                                   },
                                   {
                                       "id": 116,
                                       "label": "HRSSC"
                                   },
                                   {
                                       "id": 117,
                                       "label": "HRBP"
                                   },
                                   {
                                       "id": 118,
                                       "label": "培训生"
                                   }
                               ]
                           },
                           {
                               "id": 119,
                               "label": "经营管理中心",
                               "children": [
                                   {
                                       "id": 120,
                                       "label": "系统应用与支持"
                                   },
                                   {
                                       "id": 121,
                                       "label": "经营与计划管理"
                                   },
                                   {
                                       "id": 122,
                                       "label": "综合管理",
                                       "children": [
                                           {
                                               "id": 123,
                                               "label": "综合管理一组"
                                           },
                                           {
                                               "id": 124,
                                               "label": "综合管理二组"
                                           }
                                       ]
                                   },
                                   {
                                       "id": 125,
                                       "label": "软件开发"
                                   }
                               ]
                           },
                           {
                               "id": 126,
                               "label": "营销中心",
                               "children": [
                                   {
                                       "id": 127,
                                       "label": "市场营销组"
                                   },
                                   {
                                       "id": 128,
                                       "label": "销售支持组"
                                   },
                                   {
                                       "id": 129,
                                       "label": "营销一区"
                                   },
                                   {
                                       "id": 130,
                                       "label": "营销二区"
                                   },
                                   {
                                       "id": 131,
                                       "label": "营销三区"
                                   },
                                   {
                                       "id": 132,
                                       "label": "营销四区"
                                   }
                               ]
                           },
                           {
                               "id": 133,
                               "label": "物资采购部"
                           },
                           {
                               "id": 134,
                               "label": "密闭输焦事业部",
                               "children": [
                                   {
                                       "id": 135,
                                       "label": "研发部四室"
                                   }
                               ]
                           },
                           {
                               "id": 136,
                               "label": "硫磺事业部",
                               "children": [
                                   {
                                       "id": 137,
                                       "label": "研发部二室【硫磺】"
                                   }
                               ]
                           },
                           {
                               "id": 138,
                               "label": "工控事业部",
                               "children": [
                                   {
                                       "id": 139,
                                       "label": "工控事业部-产品"
                                   },
                                   {
                                       "id": 140,
                                       "label": "工控事业部-电装"
                                   },
                                   {
                                       "id": 141,
                                       "label": "工控事业部-项目"
                                   },
                                   {
                                       "id": 142,
                                       "label": "工控事业部-综合管理"
                                   },
                                   {
                                       "id": 143,
                                       "label": "研发部三室【工控】"
                                   }
                               ]
                           },
                           {
                               "id": 144,
                               "label": "特阀事业部",
                               "children": [
                                   {
                                       "id": 145,
                                       "label": "研发部七室【特阀】"
                                   }
                               ]
                           },
                           {
                               "id": 146,
                               "label": "公用设计部",
                               "children": [
                                   {
                                       "id": 147,
                                       "label": "研发部六室【公用】"
                                   }
                               ]
                           },
                           {
                               "id": 148,
                               "label": "水力除焦事业部",
                               "children": [
                                   {
                                       "id": 149,
                                       "label": "研发部五室"
                                   }
                               ]
                           },
                           {
                               "id": 150,
                               "label": "技术质量管理部",
                               "children": [
                                   {
                                       "id": 151,
                                       "label": "技术质量管理"
                                   },
                                   {
                                       "id": 152,
                                       "label": "技术顾问"
                                   }
                               ]
                           },
                           {
                               "id": 153,
                               "label": "质量检验部",
                               "children": [
                                   {
                                       "id": 154,
                                       "label": "研发部十一室"
                                   }
                               ]
                           },
                           {
                               "id": 155,
                               "label": "研发部"
                           },
                           {
                               "id": 156,
                               "label": "罐式密闭事业部",
                               "children": [
                                   {
                                       "id": 157,
                                       "label": "研发部九室"
                                   }
                               ]
                           },
                           {
                               "id": 158,
                               "label": "制造装配部",
                               "children": [
                                   {
                                       "id": 159,
                                       "label": "制造装配部-机加"
                                   },
                                   {
                                       "id": 160,
                                       "label": "制造装配部-装配"
                                   },
                                   {
                                       "id": 161,
                                       "label": "制造装配部-铆焊"
                                   },
                                   {
                                       "id": 162,
                                       "label": "制造装配部-工艺"
                                   },
                                   {
                                       "id": 163,
                                       "label": "制造装配部-计划管理"
                                   },
                                   {
                                       "id": 164,
                                       "label": "研发部八室"
                                   },
                                   {
                                       "id": 165,
                                       "label": "制造装配部-仓库"
                                   }
                               ]
                           },
                           {
                               "id": 166,
                               "label": "计划部",
                               "children": [
                                   {
                                       "id": 167,
                                       "label": "计划组"
                                   },
                                   {
                                       "id": 168,
                                       "label": "项目组",
                                       "children": [
                                           {
                                               "id": 169,
                                               "label": "研发部十室"
                                           }
                                       ]
                                   }
                               ]
                           },
                           {
                               "id": 170,
                               "label": "流程与IT管理部"
                           },
                           {
                               "id": 171,
                               "label": "产品工艺部",
                               "children": [
                                   {
                                       "id": 172,
                                       "label": "产品工艺筹备组"
                                   }
                               ]
                           },
                           {
                               "id": 173,
                               "label": "安环管理部"
                           }
                       ]
                   },
                   {
                       "id": 102,
                       "label": "涧光工程",
                       "children": [
                           {
                               "id": 108,
                               "label": "总经理"
                           },
                           {
                               "id": 109,
                               "label": "综合管理部"
                           },
                           {
                               "id": 174,
                               "label": "生产技术部"
                           }
                       ]
                   }
               ]
           }
       ]
   }
    }

   async deptList(){
    
     this.ctx.body={
     code:200,
    data: [
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-04-26 14:18:56",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 100,
          "parentId": 0,
          "ancestors": "0",
          "deptName": "涧光集团",
          "orderNum": 0,
          "leader": "涧光集团",
          "phone": "15888888888",
          "email": "ry@qq.com",
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-04-26 14:18:56",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 101,
          "parentId": 100,
          "ancestors": "0,100",
          "deptName": "涧光股份",
          "orderNum": 1,
          "leader": "涧光股份",
          "phone": "15888888888",
          "email": "ry@qq.com",
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-04-26 14:18:56",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 102,
          "parentId": 100,
          "ancestors": "0,100",
          "deptName": "涧光工程",
          "orderNum": 2,
          "leader": "",
          "phone": "",
          "email": "",
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-04-26 14:18:56",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 103,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "公司高层",
          "orderNum": 1,
          "leader": "公司高层",
          "phone": "15888888888",
          "email": "ry@qq.com",
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-04-26 14:18:56",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 104,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "董事会办公室",
          "orderNum": 2,
          "leader": "董事会办公室",
          "phone": "15888888888",
          "email": "ry@qq.com",
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-04-26 14:18:56",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 105,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "行政部",
          "orderNum": 3,
          "leader": "行政部",
          "phone": "15888888888",
          "email": "ry@qq.com",
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-04-26 14:18:56",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 106,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "财务部门",
          "orderNum": 4,
          "leader": "若依",
          "phone": "15888888888",
          "email": "ry@qq.com",
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-04-26 14:18:56",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 107,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "人力资源部",
          "orderNum": 5,
          "leader": "",
          "phone": "",
          "email": "",
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 14:33:23",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 119,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "经营管理中心",
          "orderNum": 6,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 14:36:33",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 126,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "营销中心",
          "orderNum": 7,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 14:38:48",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 133,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "物资采购部",
          "orderNum": 8,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 14:39:27",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 134,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "密闭输焦事业部",
          "orderNum": 9,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 14:40:28",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 136,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "硫磺事业部",
          "orderNum": 10,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 14:41:43",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 138,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "工控事业部",
          "orderNum": 11,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 15:20:42",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 144,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "特阀事业部",
          "orderNum": 12,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 15:21:41",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 146,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "公用设计部",
          "orderNum": 13,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
      {
          "searchValue": null,
          "createBy": "admin",
          "createTime": "2022-06-14 15:23:13",
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {},
          "deptId": 148,
          "parentId": 101,
          "ancestors": "0,100,101",
          "deptName": "水力除焦事业部",
          "orderNum": 14,
          "leader": null,
          "phone": null,
          "email": null,
          "status": "0",
          "delFlag": "0",
          "parentName": null,
          "children": []
      },
  
      ]
    }
   } 
}



module.exports = HomeController;
