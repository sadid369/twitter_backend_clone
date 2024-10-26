const UserService = require('../services/user-service');

const userService = new UserService();

async function signUp (req, res) {
    try {
        const user = await userService.signUp(req.body);
        res.status(201).json({ success: true, message: 'User created successfully', data: user, err: {} });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error creating user', data: {}, err: error });
    }
};

module.exports = {
    signUp
};