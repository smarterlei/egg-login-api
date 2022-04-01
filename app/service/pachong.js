const { Service } = require("egg");
 class NewService extends Service {
     async getNewsList(){
         var list=['奥斯特洛夫斯基',222,333]
         return list
     }
     
 }

 module.exports =NewService