const express = require("express");
const router = express.Router();

router.get("/welcome", function(req, res) {
    res.send({
        message: "Welcome to our app"
    });
});

module.exports = router;