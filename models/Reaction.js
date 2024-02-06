const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
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
    },
});

const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
};

reactionSchema.virtual('formattedDate').get(function () {
    return this.createdAt.toLocaleDateString('en-US', options);
});

module.exports = reactionSchema;