const userService = require("../services/UserService");

exports.register = async(req, res) => {
    const {email, password} = req.body;

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password content 8 characters"
        })
    }
    try {
        const users = await userService.RegisterService(email, password);
        res.status(201).json({
            message: "User created successfully",
            users
        });
    } catch (error) {
        res.status(401).json({
            message: "User not successful created",
            error: error.message,
        })
    }
}