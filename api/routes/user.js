var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var Logger = require('../logger/logger');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');

const logger = new Logger();

// request to get all the users
router.get("/users", (req, res, next) => {
    logger.info("url:" + req.url);
    // res.json(users);

    User.find().then(function(users){
        if(!users){ 
            logger.info("Users not found");
            return res.sendStatus(401); 
        }
        logger.info(`Found ${users.length} Users`);
        return res.json(users);
    }).catch(next);
});

// request to get all the users by userName
router.get("/users/:firstName", (req, res, next) => {
    logger.info("url:" + req.url);

    User.findOne({'firstName': req.params.firstName}).then(function(users){
        if(!users){ 
            logger.info("Users not found");
            return res.sendStatus(401); 
        }
        logger.info(`Inserted User`);
        return res.json(users);
    }).catch(next);
});

// request to post the user
router.post("/user", (req, res, next) => {
    logger.info("url:" + req.url);
    const user = new User(req.body.user);
    
    user.save(function (err, user) {
        if (err) return logger.info("Error:" + err);
        logger.info("User is saved");
    });
    return res.json(user);
});

module.exports = router;
