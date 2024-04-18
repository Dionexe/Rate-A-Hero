const express = require('express');
const router = require('express').Router();
const Character = require("./components/character");

router.get("/character", (req, res) => {
    Character.find()
      .then((character) => {
        res.json(character);
      })
      .catch((err) => {
        res.status(404).json({ msg: "Character Not Found" });
      });
  });