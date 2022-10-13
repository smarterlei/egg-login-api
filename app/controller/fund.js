"use strict";

const Controller = require("egg").Controller;
const moment = require("moment")

class fundController extends Controller {
  async home() {
    let url =
      "https://xueqiu.com/service/v5/stock/screener/quote/list?page=1&size=30&order=desc&order_by=amount&exchange=CN&market=CN&type=sha&_=1659672349641";
    // await this.service.book.homepage()
    var res = await this.ctx.curl(url, { dataType: "json", method: "GET" });
    let result = res.data.data.list.splice(0, 10).map((item) => {
      return {
        name: item.name,
        symbol: item.symbol,
        current: item.current,
        chg: item.chg >= 0 ? "+" + item.chg : item.chg,
        amount: item.amount,
        percent: item.percent+'%', // 涨跌幅
        datetime:moment().format("YYYY-MM-DD HH:mm:ss") // 获取当前时间 精确到秒
      };
    });
    this.ctx.body = result;
    // 给数据库插入多条数据
    let outerData =[]
    result.forEach(item => {
        let data =[]
    for (const key in item) {
        data.push(item[key])
       
     }
     
     outerData.push(data)
  });
    console.log(outerData,' 写入数据库的原始数据')
      this.addRows(outerData)
    
  }

  async addRows(list) {
    // list 结构 [[id,title,href],[id,title,href]]
    const result = await this.app.mysql.query("INSERT INTO ch_fund (name,symbol,current,chg,amount,precent,datetime) values ?", [list]);
    return result;
  }


}
module.exports = fundController;
