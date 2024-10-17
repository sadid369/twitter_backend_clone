const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongodb is connected');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    connect
};   