const mongodb = require('mongodb');

const userSchema = new mongodb.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    tweets: [{ type: mongodb.Schema.Types.ObjectId, ref: 'Tweet' }],
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = mongodb.model('User', userSchema);

module.exports = User;