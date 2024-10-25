const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        comment: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        commentable: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            refPath: 'onModel'
        },
        onModel: {
            type: String,
            required: true,
            enum: ['Tweet', 'Comment']
        }

    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;