const mongoose = require("mongoose");

const { Schema } = mongoose;

const Post = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: new Date()
    }
});

// model 인스턴스를 만든 뒤 내보내기
module.exports = mongoose.model("Post", Post);