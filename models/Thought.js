const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
};

thoughtSchema.virtual('formattedDate').get(function () {
    return this.createdAt.toLocaleDateString('en-US', options);
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;