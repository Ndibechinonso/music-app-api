var express = require("express");
var router = express.Router();
var axios = require("axios");
var fs = require("fs");
const { response } = require("express");

// /* GET home page. */
router.get("/", function (req, res, next) {
  res.send("artists");
});

router.post("/", async function (req, res) {
  try {
    const token = req.body.accessToken;
    const id = req.body.userId;

    const artists = await axios.get(
      `https://api.deezer.com/user/${id}/artists?access_token=${token}`
    );
    if (artists.data.error) {
      return res.status(400).json(artists.data.error);
    }

    const recommendedArtists = await axios.get(
      `https://api.deezer.com/user/${id}/recommendations/artists?access_token=${token}`
    );
    if (recommendedArtists.data.error) {
      return res.status(400).json(recommendedArtists.data.error);
    }

    const results = [artists.data, recommendedArtists.data];
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
