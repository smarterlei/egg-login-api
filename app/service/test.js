module.exports = app => {
  class Service extends app.Service {
        async index(){
            var data =await this.app.mysql.query('select * from users');
            return data
        }
  }
  return Service
}
