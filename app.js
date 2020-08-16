const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/data_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
})