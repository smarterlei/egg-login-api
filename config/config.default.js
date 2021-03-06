/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {//关闭安全策略 开启post之旅
      csrf: {
        enable: false,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1641788681472_254';
// 配置 swagger
config.swaggerdoc = {
  dirScanner: './app/controller', //插件扫描的文档路径
  apiInfo: {
    title: 'swagger文档',
    description: 'egg.js 新闻权限系统文档',
    version: '1.0.0',
  },
  consumes: ['application/json','multipart/form-data'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
  produces: ['application/json','multipart/form-data'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
  securityDefinitions:{
    // basicAuth: { // basicAuth之后接口注释 @basicAuth
    //   type: "basic",
    // },
         apikey: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
  },
  enableSecurity:true,
  schemes: ['http', 'https'],
  routerMap: true, // 是否自动生成route
  enable: true,
};
  // add your middleware config here
  config.middleware = ['auth','jwtErr'];
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  }
  config.multipart ={
    mode:'file',
    fileSize:'30mb',
    fileExtensions:['.txt']
  }
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'koa',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.jwt={
    secret:'123456'
  }
  config.api='http://www.phonegap100.com/';
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
