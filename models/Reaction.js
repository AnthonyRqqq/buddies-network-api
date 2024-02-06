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

// Options for setting the formattedDate on line 31
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
};

// Virtual for formatting the given date from the createdAt field
reactionSchema.virtual('formattedDate').get(function () {
    return this.createdAt.toLocaleDateString('en-US', options);
});

module.exports = reactionSchema;