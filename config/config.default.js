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
      port: '33066',
      // 用户名
      user: 'root',
      // 密码
      password: '123123',
      // 数据库名
      database: 'koa',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // redis 缓存数据库  多个redis 缓存库 ，改为clients
  config.redis = {
    clients: {
        db0: { host: '127.0.0.1',
          port: 6379,
          password: '',
          db: '0',  
        },
        db1: { host: '127.0.0.1',
          port: 6379,
          password: '',
          db: '1',  
        },
      }
 
  }
  config.jwt={
    secret:'123456'
  }
   //解决跨域
   config.cors = {
    origin: '*',//允许的端口和地址 * 代表允许所有域名访问接口
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',//允许的请求方式
    credentials:true//允许前端带cookie
 };

  config.api='http://www.phonegap100.com/';
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
