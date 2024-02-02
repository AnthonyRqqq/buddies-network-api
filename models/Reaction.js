const mongoose = require('mongoose');

const reactionSchema = {
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
}