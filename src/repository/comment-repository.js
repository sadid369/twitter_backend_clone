const Comment = require('../models/comment');
class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
}