'use strict';

/**
 * @param {Egg.Application} app - egg application 
 */
module.exports = app => {
  const { router, controller,middleware } = app;
  app.router.redirect('/', '/swagger-ui.html', 302);
  // router.get('/register', controller.home.index);
  router.post('/login', controller.home.login);
  router.get('/userlist', controller.home.user);
  router.get('/news', controller.news.newsList);
 
  router.get('/list/',app.jwt, controller.home.user);
  router.get('/api/getdata',app.jwt, controller.news.getuserData); // 需要在路由配置 apikey权限
  router.get('/register', controller.add.index);
  router.post('/add', controller.add.add);
  router.post('/upload', controller.file.upload); // 上传接口
  router.get('/jianshu', controller.book.index);
  router.get('/getInfo', controller.home.getInfo);
  router.get('/getRouters', controller.home.getRouters);
 
};
