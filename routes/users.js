var express = require("express");
var router = express.Router();
const { fetcHomeData, fetchArtistData, fetchPalylistPageData, fetchGenrePageData } = require("../controllers/pagesController");
const { fetchPlaylist, addFavTrack, addPlaylist, addPlaylistTrack, deletePlaylist, deletePlaylistTrack, deleteOtherUsersPlaylists } = require("../controllers/userActionsController");

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
  res.send("You  hit the users route");
});


module.exports = router;
