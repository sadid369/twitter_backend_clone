const TweetService = require("../services/tweet-service");
const tweetService = new TweetService();
class TweetController {
    hello (req, res) {
        res.send('hello from simple server :)');
    }
    async createTweet (req, res) {
        try {
            const tweet = await tweetService.createTweet(req.body);
            // res.status(201).send(tweet);
            res.status(201).json({ success: true, message: 'Tweet created successfully', data: tweet, err: {} });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error creating tweet', data: {}, err: error });
        }
    }

    async getTweet (req, res) {
        try {
            const tweet = await tweetService.getTweet(req.params.id);
            res.status(201).json({ success: true, message: 'successfully fetching tweet', data: tweet, err: {} });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error in fetching tweet', data: {}, err: error });
        }
    }
}
module.exports = TweetController;