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

  async login(request) {
    const { ctx, app } = this;
    const username = request.username;
    const password = request.password;

    const sel = await this.app.mysql.get("register", { username, password });
    console.log(sel, "------------");
    if (sel) {
      const token = app.jwt.sign(
        {
          username: username, //需要存储的 token 数据
        },
        app.config.jwt.secret
      );
      console.log(token, "auth- apikey");
      this.ctx.body = { data: sel.username + "登录成功", token:'bearer '+token };
      // eslint-disable-next-line eqeqeq
    }
    if (sel == null) {
      this.ctx.body = "抱歉！登录失败，请重新登录";
    }
  }
}

module.exports = NewUser;
