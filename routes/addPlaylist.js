var express = require("express");
var router = express.Router();
var axios = require("axios");
const { response } = require("express");
// const session = require('express-session');

router.post("/", async function (req, res) {
    try {
        const id = req.body.id;
        const playlistName = req.body.playlistName;

        const accessToken = req.body.accessToken;

        const addTrack = await axios.post(
            `https://api.deezer.com/user/${id}/playlists?title=${playlistName}&access_token=${accessToken}`
        );

        res.status(200).json(addTrack.data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get("/", function (req, res) {
    console.log("Inside Home Login");
    res.send("You  hit the addPlaylist route");
});

module.exports = router;
