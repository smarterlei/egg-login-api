const bcrypt = require("bcryptjs");

const { Service } = require("egg");
class NewUser extends Service {
  async getUserData(query) {
     console.log(query, "---query on egg.js");
    const total = await this.app.mysql.query(
      "select count(*) as total from user"
    );
    // let data = await this.app.mysql.select("user", {
    //   limit: Number(query.pageSize),
    //   offset: (query.currentPage - 1) * query.pageSize,    
    // });
    const TABLE_NAME ='user'
    const QUERY_STR = 'name';
    let sql
   if(query.name){
    sql = `select  * from ${TABLE_NAME} where name like "%${query.name}%" LIMIT ${(query.currentPage - 1) * query.pageSize},${query.pageSize} ; `;
   }
   else{
     sql=`select  * from ${TABLE_NAME}  LIMIT ${(query.currentPage - 1) * query.pageSize},${query.pageSize} ; `
   }
 
    let result =  await this.app.mysql.query(sql)
 
    console.log(query.pageSize,'total length')
    return {
      data: result,
      currentPage: query.currentPage,
      pageSize:query.pageSize,
      total: total[0].total,
    };
  }
// 注册信息
async registerPost(request){
  console.log('==========================', request )
  const username =  request.username;
  const password =  request.password;
  console.log(username,'new')
  if(username && password){
      const res = await this.app.mysql.select('register')         
      let currentUser=res.find(item=>item.username==username)

      if(currentUser && currentUser.username){
          this.ctx.body=currentUser.username+'账户已存在'
      }
      else{
          console.log('新增用户界面',password)
          // 密码加密  bcrypt.js
          const salt = await bcrypt.genSalt(10); // 加密规则
          let newPassword = await bcrypt.hash(password,salt) 

            console.log(username, newPassword,'===========salt')
              await this.app.mysql.insert('register', { username, password:newPassword });
              this.ctx.body={
                  code:200,
                  data:username+'新账户创建成功'
              }                
      }
      
  }

}

 

  async login(request) {
    const { ctx, app } = this;
    const username = request.username;
    const salt =await bcrypt.genSalt(10); // 加密规则

    const dbUser = await this.app.mysql.get("register", { username });
    // const passwordHash =  await bcrypt.hash('123456',salt) ;

     console.log(request.password, "------获取用户登录信息------",'===',dbUser.password);
   const valid= await bcrypt.compare(request.password,dbUser.password)
   console.log(valid,'布尔值')
    if (dbUser && valid) {
      const token = app.jwt.sign(
        {
          username: username, //需要存储的 token 数据
        },
        app.config.jwt.secret
      );
      // console.log(token, "auth- apikey -restful-api");
      this.ctx.body = { data: dbUser.username + "登录成功", token:'bearer '+token };
      // eslint-disable-next-line eqeqeq
    }
    if (dbUser == null) {
      this.ctx.body = "抱歉！登录失败，请重新登录";
    }
    if(!valid){
      this.ctx.body={
        data:{
        code:200,
        msg:"用户名或者密码不匹配"}}
    }
  }
}

module.exports = NewUser;
