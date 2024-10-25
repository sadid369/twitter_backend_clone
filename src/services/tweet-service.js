const HashtagRepository = require('../repository/hashtag-repository');
const TweetRepository = require('../repository/tweet-repository');

class TweetService {
    constructor() {
        this.hashtagRepository = new HashtagRepository();
        this.tweetRepository = new TweetRepository();
    }
    async createTweet (data) {
        try {
            const content = data.content;
            const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag) => tag.substring(1).toLowerCase());
            const tweet = await this.tweetRepository.create(data);
            let alreadyPresentTags = await this.hashtagRepository.getHashtagByName(tags);
            let textOfPresentTags = alreadyPresentTags.map(item => item.text);
            let newTags = tags.filter(item => !textOfPresentTags.includes(item));
            newTags = newTags.map((tag) => {
                return {
                    text: tag,
                    tweets: [tweet._id]
                };
            });
            await this.hashtagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach(async (tag) => {
                tag.tweets.push(tweet._id);
                await tag.save();
            });
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getTweet (id) {
        try {
            const tweet = await this.tweetRepository.getTweet(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TweetService;