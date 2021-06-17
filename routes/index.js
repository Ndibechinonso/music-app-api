var express = require("express");
var router = express.Router();
var axios = require("axios");
var fs = require("fs");
const { response } = require("express");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("DEEZIFY");
});

router.post("/", async function (req, res) {
  try {
    const excode = req.body.code;
    const token = await axios.get(
      `https://connect.deezer.com/oauth/access_token.php?app_id=475622&secret=df16d40386432399911a363b3bcb7886&code=${excode}&output=json`
    );
    if (token.data.error) {
      return res.status(400).json(token.data.error);
    }

    const userDetails = await axios.get(
      `https://api.deezer.com/user/me?access_token=${token.data.access_token}`
    );
    if (userDetails.data.error) {
      return res.status(400).json(userDetails.data.error);
    }

    const results = [
      token.data.access_token,
      userDetails.data,
      userDetails.data.id,
    ];

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
