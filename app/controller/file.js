const { Controller } = require('egg');
const path = require('path');
const fs = require('fs');
class FileController extends Controller {
    async upload() {
        const { ctx } = this;
        // 这里是 打印看具体数据
        console.log('ctx.request');
        console.log(ctx.request.files);
        const file = ctx.request.files[0];
        const fileinfo = fs.readFileSync(file.filepath);
        const name = `lei_${new Date().getTime()}_${file.filename}`;
        const target = path.join(this.config.baseDir, `app/public/upload/${name}`);
        try {
            await fs.writeFileSync(target, fileinfo);
        } catch (error) {
            throw error;
        } 
        finally {
            await fs.unlink(file.filepath, err => {
                if (err) {
                    throw err;
                }
                console.log('删除缓存文件:' + file.filepath + '成功！');
            });
        }
        let pathId = target.slice(target.indexOf('public\\upload'));
        let http = 'http://127.0.0.1:7001/';  // 这里是自己的 访问ip
        await ctx.service.upload.uploadindex({url:http + pathId })     
      
        // 把生产的上传路径 存储到mysql
        ctx.body = { code: 200, message: '上传成功!', data: http + pathId, file };

    }
}
module.exports = FileController;
 