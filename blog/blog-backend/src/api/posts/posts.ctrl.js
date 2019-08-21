// postId의 초깃값 설정
let postId = 1;

const posts = [
    {
        id: 1,
        title: "제목",
        body: "내용"
    }
];

/**
 * 포스트 작성하기
 * {title, body}
 */
exports.write = (ctx) => {
    const {title, body} = ctx.request.body;
    postId++;

    // 등록할 포스트 객체 작성
    const post = {
        id: postId, title, body
    };

    posts.push(post);
    ctx.body = posts;
};

/**
 * 포스트 리스트
 * GET - /api/posts
 */
exports.list = (ctx) => {
ctx.body = posts;
};

/**
 * 특정 포스트 조회하기
 * GET - /api/posts/:id
 */
exports.findPost = (ctx) => {
    const {id} = ctx.params;
    // params에서 받아오는 파라미터들은 문자열이므로, 비교할 대상과 같은 타입으로 형변환 해 주어야 한다.
    const post = posts.find(post => post.id === parseInt(id));

    // 찾는 포스트가 없으면 404
    if(!post) {
        ctx.status = 404;
        ctx.body = {
            message : "해당 포스트가 존재하지 않습니다."
        };
        return;
    }
    ctx.body = post;
};

/**
 * 특정 포스트 제거하기
 * DELETE - /api/posts/:id
 */

exports.deletePost = ctx => {
    const {id} = ctx.body;
    findPost = post => post.id !==parseInt(id);
    if(!post.find(this.findPost)){
        ctx.status = 404;
        ctx.body = {
            message : "해당 포스트가 존재하지 않습니다."
        };
        return;
    }
    posts = posts.filter(post => post.id !==parseInt(id));
    ctx.status = 204; // No Content
};

 /**
  * 포스트 수정(통째로 교체)
  * PUT - /api/posts/:id
  * {title, body}
  */
exports.replace = ctx => {
    const {id} = ctx.params;
    const index = posts.findIndex(post => post.id === parseInt(id));
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message : "해당 포스트가 존재하지 않습니다."
        };
        return;
    }
    posts[index] = {
        id, ...ctx.request.body
    }
    ctx.body = posts[index];
};

/**
 * 포스트 수정 (특정 필드 변경)
 * PATCH - /api/posts
 */
exports.update = ctx => {
    const {id} = ctx.params;
    const index = posts.findIndex(post => post.id === parseInt(id));
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message : "해당 포스트가 존재하지 않습니다."
        };
        return;
    }
    // 전개연산자를 이용해 기존 값 위에 덮어씌우기
    posts[index] = {
        ...posts[index],
        ...ctx.request.body
    }
    ctx.body = posts[index];
};