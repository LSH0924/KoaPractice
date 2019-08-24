require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyParser");

const api = require("./api");

const app = new Koa();
const router = new Router();

// 환경변수에서 port 가져오기. 값이 없으면 기본 값으로 4000을 지정한다.
const { PORT: port = 4000 } = process.env;

// 라우터에 api라우트 설정
router.use("/api", api.routes());

// 라우터를 적용하기 전에 bodyParser부터 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용하기
app.use(router.routes()).use(router.allowedMethods());

// 40000번 포트 열기. 연결되면 console.log를 출력
app.listen(port, () => {
    console.log("4000번 포트에 연결되었습니다.");
});
