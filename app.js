const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/real_data", {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
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
});

const User = mongoose.model("User", userSchema);

User.findOne({
    name: "Deola Philips"
}, (err, user) => {
    if (err) {
        console.log(err)
    } else {
        console.log(user)
        user.posts.push({
            title: "Progress so far",
            body: "Our wonderful student, Afolabi Opakunle now understands how embeded data association works in MongoDB"
        });
        user.save((err, saved) => {
            if (err) {
                console.log(err)
            } else {
                console.log(saved)
            }
        })
    }
})
// User.create({
//     name: "Deola Philips",
//     email: "deola.phillips@embassy.com"
// }, (err, user) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// });