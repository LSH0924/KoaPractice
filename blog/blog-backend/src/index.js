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
router.get('/about/:name?', (ctx) => {
    const {name} = ctx.params;
    ctx.body = name ? name + "을(를) 소개합니다." : "소개";
});

router.get('/posts', (ctx)=>{
    const {id} = ctx.query;
    ctx.body = id ? "Post#" + id : "포스트 아이디가 존재하지 않습니다.";
});

// app 인스턴스에 라우터 적용하기
app.use(router.routes()).use(router.allowedMethods());

// 40000번 포트 열기. 연결되면 console.log를 출력
app.listen(4000, () => {
    console.log("4000번 포트에 연결되었습니다.");
});

const hello = 'hello';