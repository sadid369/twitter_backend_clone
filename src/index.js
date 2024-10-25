const express = require('express');
const router = require('./routes');
const { connect } = require('./config/database');
const Tweet = require('./models/tweet');
const Hashtag = require('./models/hashtag');
const TweetRepository = require('./repository/tweet-repository');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.get('/', (req, res) => {

    res.send('hello from simple server :)');

});


app.listen(port, async () => {
    console.log('> Server is up and running on port : ' + port);
    // mongodb connection established
    await connect();

});

//