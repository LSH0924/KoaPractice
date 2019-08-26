const Router = require("koa-router");
const postsCtrl = require("./posts.ctrl");

const posts = new Router();

// 라우트 처리 함수
const printInfo = (ctx) => {
    ctx.body = {
        method: ctx.method,
        path: ctx.path,
        params: ctx.params
    }
};

posts.get("/", postsCtrl.list);
posts.get("/:id", postsCtrl.findPost);
posts.delete("/:id", postsCtrl.deletePost);
// request body 필요
posts.post("/", postsCtrl.write);
posts.patch("/:id", postsCtrl.update);

module.exports = posts;