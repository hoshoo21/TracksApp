const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const router = express.Router();

router.post("/signup", async (req, res) => {
    res.send("Signup request");  
});


module.exports = router;

