const { Service } = require("egg");
 class newHome extends Service {
     async userlist(){
         let data= await this.app.mysql.query('select * from register');
         return data
     }
     async register(){
        console.log('==========================')
        const username = this.ctx.query.username;
        const password = this.ctx.query.password;
        console.log(username,password,'new')
        if(username){
            const res = await this.app.mysql.select('register')         
            let currentUser=res.find(item=>item.username==username)
 
            if(currentUser && currentUser.username){
                this.ctx.body=currentUser.username+'账户已存在'
            }
            else{
                    await this.app.mysql.insert('register', { username, password });
                    this.ctx.body=username+'新账户创建成功'                
            }
            
        } 
     }

     async registerPost(request){
        console.log('==========================', request )
        const username =  request.username;
        const password =  request.password;
        console.log(username,password,'new')
        if(username && password){
            const res = await this.app.mysql.select('register')         
            let currentUser=res.find(item=>item.username==username)
 
            if(currentUser && currentUser.username){
                this.ctx.body=currentUser.username+'账户已存在'
            }
            else{
                    await this.app.mysql.insert('register', { username, password });
                    this.ctx.body=username+'新账户创建成功'                
            }
            
        }
 
     }
 
 }

 module.exports =newHome