
'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {
   
async index() {
   
    await this.service.book.homepage()
  }

}
module.exports = BookController;