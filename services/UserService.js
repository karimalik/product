const UserModel = require("../models/UserSchema");

//register service
exports.RegisterService = async () => {
    return await UserModel.register();
}

//login service
exports.LoginService = async () => {
    return await UserModel.login();
}

exports.DeleteAccount = async () => {
    return await UserModel.delete();
}