const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        likeable: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            refPath: 'onModel'
        },
        onModel: {
            type: String,
            required: true,
            enum: ['Tweet', 'Comment']
        },

    },

    {
        timestamps: true,
    }
);

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;