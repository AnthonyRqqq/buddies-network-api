const mongoose = require('mongoose');

const userSchema = {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        tpye: String,
        required: true,
        unique: true,
    },
    thoughts: [thoughtSchema],
    friends: [friendSchema]
}