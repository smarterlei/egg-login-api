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
    async test3() {
        const { ctx } = this;

        const str = ctx.query.str
        var data =await this.ctx.service.test.index()      
        ctx.body = await {
            message: data
        }
    }

 
}

module.exports = TestController;