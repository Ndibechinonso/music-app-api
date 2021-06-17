var express = require("express");
var router = express.Router();
var axios = require("axios");
var fs = require("fs");
const { response } = require("express");

// /* GET home page. */
router.get("/", function (req, res, next) {
  res.send("homepage");
});

router.post("/", async function (req, res) {
  try {
    const token = req.body.accessToken;
    const id = req.body.userId;

    const recommendedAlbums = await axios.get(
      `https://api.deezer.com/user/${id}/recommendations/albums?access_token=${token}`
    );

    if (recommendedAlbums.data.error) {
      return res.status(400).json(recommendedAlbums.data.error);
    }

    const lastPlayed = await axios.get(
      `https://api.deezer.com/user/${id}/history?access_token=${token}`
    );
    if (lastPlayed.data.error) {
      return res.status(400).json(lastPlayed.data.error);
    }

    const recommendedReleases = await axios.get(
      `https://api.deezer.com/user/${id}/recommendations/releases?access_token=${token}`
    );
    if (recommendedReleases.data.error) {
      return res.status(400).json(recommendedReleases.data.error);
    }

    const results = [
      recommendedAlbums.data,
      lastPlayed.data,
      recommendedReleases.data,
    ];
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
