require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_URI : mongoURI } = process.env;

// mongoose의 Promise가 Node의 Promise를 사용하도록 지정
mongoose.Promise = global.Promise;

// MongoDB Connect
mongoose.connect(mongoURI, {useNewUrlParser: true})
        .then(() => {
            console.log("Connected to mongodb");
        })
        .catch(e => {
            console.error(e);
        });