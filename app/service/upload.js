module.exports = app => {
    class Service extends app.Service {
          async uploadindex(request){
              let url = request.url
            const result=  await this.app.mysql.insert('uploadfilePath', { url:url,createTime:Date.now()});
            return result     
              
          }

    }
    return Service
  }
  