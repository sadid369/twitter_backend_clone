const express = require('express');
const TweetController = require('../controllers/tweet-controller');
const UserController = require('../controllers/user-controller');

const tweetController = new TweetController();
const router = express.Router();

router.get('/hello', tweetController.hello);
router.post('/tweet', tweetController.createTweet);
router.get('/tweet/:id', tweetController.getTweet);
router.post('/signup', UserController.signUp);


module.exports = router;


