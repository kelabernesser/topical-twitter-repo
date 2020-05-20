const express = require("express");
const topicRouter = express.Router();
const Topic = require("../models/topic.js");
const Post = require("../models/post.js");

topicRouter.get("/", (req, res, next) => {
    Topic.find((err, topics) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(topics);
    });
});

topicRouter.post("/", (req, res, next) => {
    const newTopic = new Topic(req.body);
    newTopic.save((err, savedTopic) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedTopic);
    });
});
module.exports = topicRouter;
