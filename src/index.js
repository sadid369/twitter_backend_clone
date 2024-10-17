const express = require('express');
const { connect } = require('./config/database');
const Tweet = require('./models/tweet');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {

    res.send('hello from simple server :)');

});


app.listen(port, async () => {
    console.log('> Server is up and running on port : ' + port);
    // mongodb connection established
    await connect();
    Tweet.create({
        content: "Tweet",
        likes: 2,
        noOfRetweets: 3
    });
});

//