const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Uses RegEx to check for valid email, returns error message if false
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']

    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
    ],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Virtual for finding the length of the friends array
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Sets User model
const User = model('user', userSchema);

module.exports = User;
