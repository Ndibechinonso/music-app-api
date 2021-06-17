var express = require("express");
var router = express.Router();
var axios = require("axios");
const { response } = require("express");
// const session = require('express-session');

router.post("/", async function (req, res) {
    try {
        const playlistId = req.body.playlistId;
        const accessToken = req.body.accessToken;

        const deleteTrack = await axios.delete(
            `https://api.deezer.com/playlist/${playlistId}?access_token=${accessToken}`
        );
        if (deleteTrack.data.error) {
            return res.status(400).json(deleteTrack.data.error);
        }

        res.status(200).json(deleteTrack.data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get("/", function (req, res) {
    console.log("Inside Home Login");
    res.send("You  hit the deleteUserPlaylist route");
});

module.exports = router;
