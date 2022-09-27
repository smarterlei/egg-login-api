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

     async addUser(request){
        console.log('==========================', request )
        const {name,sex,tel,job,age,hobby,url} = request      
                    await this.app.mysql.insert('user', {name,sex,tel,job,age,hobby,url});
                    this.ctx.body=name+'員工创建成功'                 
 
     }
     async editUser(request){
        console.log('==========================', request )
        const {id,name,sex,tel,job,age,hobby,url} = request
        
                    await this.app.mysql.update('user', {id,name,sex,tel,job,age,hobby,url});
                    this.ctx.body=name+'員工修改成功'                 
 
     }

     async delUser(request){
        console.log('==========================', request )
        const {id} = request
        
                    await this.app.mysql.delete('user', {id});
                    this.ctx.body='員工删除成功'                 
 
     }
 
 }

 module.exports =newHome