const userService = require("../services/UserService")

exports.register = async(req, res, next) => {
    const {email, password} = req.body

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password content 8 characters"
        })
    }
}