const Post = require("models/post");
const {ObjectId} = require("mongoose").Types;

/**
 * 요청할 때 ID 검증하기
 */
exports.checkObjectId = (ctx, next) => {
    const {id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400; // 잘못된 요청
        return null;
    }
    return next();
};

/**
 * 포스트 작성하기
 * {title, body}
 */
exports.write = async ctx => {
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
exports.list = async ctx => {
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
exports.findPost = async ctx => {
    const {id} = ctx.params;
    try{
        const post = await Post.findById(id).exec();
        // id와 일치하는 포스트가 존재하지 않을 때
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(e, 500);
    }
};

/**
 * 특정 포스트 제거하기
 * DELETE - /api/posts/:id
 */

exports.deletePost = async ctx => {
    const {id} = ctx.params;
    try{
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(e, 500);
    }

};

/**
 * 포스트 수정 (특정 필드 변경)
 * PATCH - /api/posts
 */
exports.update = async ctx => {
    const {id} = ctx.params;
    try{
        // 세 번째 파라미터값을 설정해야 업데이트 된 객체를 반환한다. 설정하지 않으면 업데이트 전의 객체 반환
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {new : true}).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(e, 500);
    }
};