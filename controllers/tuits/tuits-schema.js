import mongoose from 'mongoose';
const schema = mongoose.Schema({
    username: String,
    handle: String,
    time: String,
    image: String,
    tuit: String,
    liked: Boolean,
    disliked: Boolean,
    dislikes: Boolean,
    likes: Number,
    replies: Number,
    retuits: Number
}, {collection: 'tuits'});
export default schema;