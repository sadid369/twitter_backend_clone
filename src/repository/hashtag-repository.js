const CrudRepository = require("./crud-repository");
const Hashtag = require("../models/hashtag");

class HashtagRepository extends CrudRepository {
    constructor() {
        super(Hashtag);
    }

    async bulkCreate (data) {
        try {
            const hashtags = await Hashtag.insertMany(data);
            return hashtags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getHashtagByName (text) {
        try {
            const hashtag = await Hashtag.find({ text: text });
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getHashtag (id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteHashtag (id) {
        try {
            const hashtag = await Tweet.findByIdAndDelete(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
module.exports = HashtagRepository;