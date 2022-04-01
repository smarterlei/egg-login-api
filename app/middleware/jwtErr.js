module.exports = (options, app) => {
    return async function (ctx, next) {
        try {
            await next();
        } catch (e) {
            ctx.status = 401;
            ctx.body = {
                msg: '身份过期,重新登录',
                code: -1,
            }
        }
    }
}