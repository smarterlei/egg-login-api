'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller 测试
 */

class TestController extends Controller {

    /**
      * @summary 接口测试
      * @description 测试swagger文档是否可用
      * @router get /api/v1/test
      * @request query string str 随机字符串
      * @response 200 testResponse
      */
    async testRedis() {
        const { ctx,app } = this;

        // const str = ctx.query.str
        // var data =await this.ctx.service.test.index()      
        // ctx.body = await {
        //     message: data
        // }
        // redis 测试
        //  const rs= await app.redis.get('db0').set('ceshi','剥夺政治权利终身')
        const rsn = await app.redis.get('db0').get('ceshi')
        const test2 = await app.redis.get('db1').set('ceshi1','添加第二个数据库')
        ctx.body='操作成功  '+rsn
    }

 
}

module.exports = TestController;