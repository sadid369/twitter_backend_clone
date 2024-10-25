const express = require('express');
const TweetController = require('../controllers/tweet-controller');
const tweetController = new TweetController();
const router = express.Router();

router.get('/hello', tweetController.hello);
router.post('/tweet', tweetController.createTweet);


module.exports = router;


