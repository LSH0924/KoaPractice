const Post = require("models/post");

/**
 * 포스트 작성하기
 * {title, body}
 */
exports.write = async (ctx) => {
    const {title, body, tags} = ctx.request.body;
    // 새 Post 인스턴스 만들기
    const post = new Post({title, body, tags});
    try{
        await post.save(); // 데이터베이스에 등록
        ctx.body = post; // 등록 후 결과 반환
    }catch(e){
        ctx.throw(e, 500);
    }
};

/**
 * 포스트 리스트
 * GET - /api/posts
 */
exports.list = async (ctx) => {
    try{
        const posts = await Post.find().exec();
        ctx.body = posts;
    }catch(e){
        ctx.throw(e, 500);
    }
};

/**
 * 특정 포스트 조회하기
 * GET - /api/posts/:id
 */
exports.findPost = (ctx) => {
};

/**
 * 특정 포스트 제거하기
 * DELETE - /api/posts/:id
 */

exports.deletePost = ctx => {
};

/**
 * 포스트 수정 (특정 필드 변경)
 * PATCH - /api/posts
 */
exports.update = ctx => {
};