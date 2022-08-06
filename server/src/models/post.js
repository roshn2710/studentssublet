const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    images: [],
    address: {
        type: String,
        required:true
    },
    price: {
        type: Number
    },
    terms:[],
    comments: [],
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
    {
        timestamps: true
    })

const Post = mongoose.model('Post', postSchema)

module.exports = Post;