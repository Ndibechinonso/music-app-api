var express = require("express");
var router = express.Router();
var axios = require("axios");
const { response } = require("express");
const { fetcHomeData, fetchArtistData, fetchPalylistPageData, fetchGenrePageData } = require("../controllers/pagesController");
const { fetchPlaylist, addFavTrack, addPlaylist, addPlaylistTrack, deletePlaylist, deletePlaylistTrack, deleteOtherUsersPlaylists } = require("../controllers/userActionsController");

// const session = require('express-session');

// router.post("/", async function (req, res) {
//   try {
//     const trackcode = req.body.tracklist;

//     const playlist = await axios.get(`${trackcode}`);

//     res.status(200).json(playlist.data);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

router.post('/homePage', fetcHomeData)
router.post('/artistsPage', fetchArtistData)
router.post('/playlistPage', fetchPalylistPageData)
router.post('/genrePage', fetchGenrePageData )
router.post('/playlist', fetchPlaylist)
router.post('/addFavTrack', addFavTrack)
router.post('/addPlaylist', addPlaylist)
router.post('/addPlaylistTrack', addPlaylistTrack)
router.post('/deletePlaylist', deletePlaylist)
router.post('/deletePlaylistTrack', deletePlaylistTrack)
router.post('/deleteOtherUsersPlaylist', deleteOtherUsersPlaylists)

router.get("/", function (req, res) {
  console.log("Inside Home Login");
  res.send("You  hit the users route");
});


module.exports = router;
