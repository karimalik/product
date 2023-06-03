const express = require("express");

const { register } = require("../controllers/UserController");


router.route("/create").post(register);

module.exports = router;