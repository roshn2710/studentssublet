const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },  
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    phoneNumber: {
        type: Number
    },
    posts: [{
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    }],

    profilePicture: {
        type: Buffer
    }
}, {
    timestamps: true
} )


const User = mongoose.model('User', userSchema)
module.exports = User;