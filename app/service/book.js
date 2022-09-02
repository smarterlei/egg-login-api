const { Service } = require("egg");
 class NewService extends Service {
     async homepage(){
         var list=['奥斯特洛夫斯基',222,333]
         return list
     }
     async getData(){
         var data =await this.app.mysql.query('select * from user');
         return data
     }
 }

 module.exports =NewService