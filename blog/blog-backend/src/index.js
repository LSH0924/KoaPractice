const Koa = require("koa");
const app = new Koa();

// 사용할 미들웨어 등록하기
app.use(async(ctx, next) => {
    console.log(1);
    // 다음 순번의 미들웨어를 호출
    await next();
    console.log("모든 미들웨어가 끝났습니다.");
});

app.use((ctx, next) => {
    console.log(2);
    next();
});

app.use((ctx) => {
    ctx.body = "hello world!";
});

// 40000번 포트 열기. 연결되면 console.log를 출력
app.listen(4000, () => {
    console.log("4000번 포트에 연결되었습니다.");
});

const hello = 'hello';