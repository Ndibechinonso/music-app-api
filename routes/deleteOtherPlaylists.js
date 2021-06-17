var express = require("express");
var router = express.Router();
var axios = require("axios");
const { response } = require("express");
// const session = require('express-session');

router.post("/", async function (req, res) {
    try {
        const playlistId = req.body.playlistId;
        const accessToken = req.body.accessToken;
        const id = req.body.id;
        const deleteOtherPlaylists = await axios.delete(
            `https://api.deezer.com/user/${id}/playlists?playlist_id=${playlistId}&access_token=${accessToken}`
        );
        if (deleteOtherPlaylists.data.error) {
            return res.status(400).json(deleteOtherPlaylists.data.error);
        }

        console.log(deleteOtherPlaylists, "deleteOtherPlaylists");
        res.status(200).json(deleteOtherPlaylists.data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get("/", function (req, res) {
    console.log("Inside Home Login");
    res.send("You  hit the deleteOtherPlaylists route");
});

module.exports = router;
