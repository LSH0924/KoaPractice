const Router = require("koa-router");

const api = new Router();

api.get("/test", (ctx) => {
    ctx.body = "라우트 모듈화 테스트";
});

// 라우트 내보내기
module.exports = api;