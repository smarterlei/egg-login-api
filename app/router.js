'use strict';

/**
 * @param {Egg.Application} app - egg application 
 */
module.exports = app => {
  const { router, controller,middleware } = app;
  app.router.redirect('/', '/swagger-ui.html', 302);
  // router.get('/register', controller.home.index);
  router.post('/login', controller.home.login); // 登录接口
  router.post('/logout', controller.home.logout)

  router.get('/system/user/deptTree',controller.home.deptTree) // 部门树  
 
  router.get('/system/dept/list', controller.home.deptList);
 
  router.get('/list/',app.jwt, controller.home.user);
  router.get('/api/getdata',app.jwt, controller.news.getuserData); // 需要在路由配置 apikey权限
   
  router.post('/register', controller.add.add); // 注册用户
  // 员工功能
  router.get('/userlist', controller.home.user); // 查看列表
  router.post('/addUser', controller.add.addUser);  // 新增
  router.post('/editUser', controller.add.editUser); // 修改
  router.post('/delUser', controller.add.delUser);  //删除

  router.post('/upload', controller.file.upload); // 上传接口
  router.get('/jianshu', controller.book.index);
  router.get('/getInfo', controller.home.getInfo);
  router.get('/getRouters', controller.home.getRouters);
 
  //获取指数行情
  router.get('/getfund',controller.fund.home)
};
