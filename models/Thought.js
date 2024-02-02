const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatTimestamp,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
});

const reactionSchema = new Schema({
    reactionId: {
        default: new ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatTimestamp,
    },
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;