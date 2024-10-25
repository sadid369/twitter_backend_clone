class CrudRepository {
    async create (data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAllTweets () {
        try {
            const results = await this.model.find();
            return results;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getTweet (id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteTweet (id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = new TweetRepository();