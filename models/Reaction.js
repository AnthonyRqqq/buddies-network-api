const { Schema, model } = require('mongoose');

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

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;