const { Schema, model } = require('mongoose');
// Required reactionSchema for subdocuments on line 20
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

// Virtual for getting the length of the reactions array
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Options for setting the formattedDate on line 41
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
};

// Virtual for formatting the given date from the createdAt field
thoughtSchema.virtual('formattedDate').get(function () {
    return this.createdAt.toLocaleDateString('en-US', options);
});

// Sets thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;