const Router = require("koa-router");

const posts = require("./posts");

const api = new Router();

api.get("/test", (ctx) => {
    ctx.body = "라우트 모듈화 테스트";
});

api.use("/posts", posts.routes());

// 라우트 내보내기
module.exports = api;