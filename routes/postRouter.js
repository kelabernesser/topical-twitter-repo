const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')

postRouter.get('/', (req, res, next) => {
    Post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

postRouter.post('/', (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedPost)
    })
})

postRouter.delete('/:postId', (req, res, next) => {
    Post.findOneAndDelete(
        {_id: req.params.postId},
        (err, deletedPost) => {
            if(err){
            res.status(500)
            return next(err)
            }
            return res.status(200).send(`Successfully deleted post: ${deletedPost}`)
        }
        
    )
})

module.exports = postRouter