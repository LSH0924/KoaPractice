const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// 라우터 설정
// home
router.get('/', (ctx) => {
    ctx.body = "home";
});

// about
router.get('/about', (ctx) => {
    ctx.body = "소개";
});

// app 인스턴스에 라우터 적용하기
app.use(router.routes()).use(router.allowedMethods());

// 40000번 포트 열기. 연결되면 console.log를 출력
app.listen(4000, () => {
    console.log("4000번 포트에 연결되었습니다.");
});

const hello = 'hello';