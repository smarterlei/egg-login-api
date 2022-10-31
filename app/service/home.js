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
            let currentUser=res.find(item=>item.username==username) // 查找数据库是否存在当前用户
 
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
        console.log('==========adduser================', request )
        const {name,sex,tel,job,age,hobby,url} = request 
        if(!name || !tel){
            this.ctx.body={
                code:'400',
                data:'名字和电话不能为空'
            }
        }  
        else{
            await this.app.mysql.insert('user', {name,sex,tel,job,age,hobby,url});
            this.ctx.body=name+'員工创建成功'                 

        }   
            
     }
     async editUser(request){
        console.log('==========================', request )
        const {id,name,sex,tel,job,age,hobby,url} = request
        if(!name || !tel || !id){
            this.ctx.body={
                code:'400',
                data:'id、名字和电话不能为空'
            }
        }  
        else{
            await this.app.mysql.update('user', {id,name,sex,tel,job,age,hobby,url});
            this.ctx.body=name+'員工修改成功'        
        }
                           
 
     }

     async delUser(request){
        console.log('==========================', request )
        const {id} = request
        if (id){
            await this.app.mysql.delete('user', {id});
            this.ctx.body='id是'+id+'的员工删除成功'   
        }
        else{
            this.ctx.body={
                code:'400',
                data:'接口异常，请传入员工id'
            }
        }
        
                                 
 
     }
 
 }

 module.exports =newHome