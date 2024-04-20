const express = require('express');
const router = require('express').Router();
const db = require('../models');

// COMMENTS
router.get('/:id/comments/new', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render('comments/New', { place });
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send('Not Found');
        });
  });
  
  router.post('/:id/comments', (req, res) => {
    let commentData = req.body;
    commentData.rant = commentData.rant === 'on';
    commentData.stars = parseFloat(commentData.stars);
    db.Comment.create(commentData)
        .then((comment) => {
            db.Place.findById(req.params.id)
                .then((place) => {
                    place.comments.push(comment);
                    place.save();
                    res.redirect(`/${item.id}`);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(404).send('Not Found');
                });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send('Bad Request');
        });
  });
  
  module.exports = router;