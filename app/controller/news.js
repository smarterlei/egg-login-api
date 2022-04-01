'use strict';

const Controller = require('egg').Controller;
 /**
 * @Controller 新闻中心
 */
class adminController extends Controller {
      /**
      * @summary 新闻列表不用鉴权
      * @description 测试swagger文档是否可用
      * @router get /api/newsList
      * @request query string id 随机字符串
      * @apikey
      * @response 200 testResponse
      */
     async newsList () {
      // 获取动态路由传值
      // var params= this.ctx.params
      // this.ctx.body ='新闻列表'
      // curl 抓取接口数据
      var api=this.config.api+'appapi.php?a=getPortalList&catid=20&page=1'
      var res= await this.ctx.curl(api)
       // 16进制转换为对象Buffer
      var data=JSON.parse(res.data)
      console.log(data.result[0],'pachong')
      this.ctx.body=data.result.splice(0,5)
    //  await this.ctx.render('news',{
    //     list:data.result
    //   })

  }
        /**
      * @summary 用户测试
      * @description 测试swagger文档是否可用
      * @router get /api/getdata
      * @request query string newsId 用户id
      * @apikey 
      * @response 200 testResponse
      */
  async getuserData() {
    // await this.ctx.render('news')
    const user = await this.ctx.service.news.getData()
    this.ctx.body={
        data:user
    }
    // this.ctx.body = 'hi, 欢迎来到我的第一个egg-App-news';
  }
  
 

}

module.exports = adminController;
