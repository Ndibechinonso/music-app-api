var express = require('express');
var router = express.Router();
require('dotenv').config();
require('../config/dbConnection')
var User = require('../models/Users')

/* Add New User. */
router.post('/', function (req, res) {
  User.create({
    fullName: req.body.fullName,
    email: req.body.email,
    feedback: req.body.feedback
  }, (err, newUser) => {
    if (err) {
      return res.status(500).json({ message: err })
    }
    else {
      return res.status(200).json({ message: 'You successfully added a new person', newUser })
    }
  })
});

router.get('/', function(req, res) {
res.send("You  hit the feedback route")
});

module.exports = router;
