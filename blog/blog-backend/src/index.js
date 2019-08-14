const Koa = require("koa");
const app = new Koa();

// 사용할 미들웨어 등록하기
app.use((ctx) => {
    ctx.body = "hello world!";
});

// 40000번 포트 열기. 연결되면 console.log를 출력한다.
app.listen(4000, () => {
    console.log("4000번 포트에 연결되었습니다.");
});

const hello = 'hello';