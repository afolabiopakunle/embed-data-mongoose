const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/data_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});
const Post = mongoose.model("Post", postSchema);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
});\
const User = mongoose.model("User", userSchema)