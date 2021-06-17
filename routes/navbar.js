var express = require("express");
var router = express.Router();
var axios = require("axios");
var fs = require("fs");
const { response } = require("express");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post("/", async function (req, res) {
  try {
    const accessToken = req.body.code;

    const userDetails = await axios.get(
      `https://api.deezer.com/user/me?access_token=${accessToken}`
    );
    if (userDetails.data.error) {
      return res.status(400).json(userDetails.data.error);
    }

    const results = [userDetails.data];

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
