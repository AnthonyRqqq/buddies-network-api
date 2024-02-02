const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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
});

const User = model('user', userSchema);

module.exports = User;
