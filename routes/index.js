var express = require('express');
var router = express.Router();
var axios = require('axios')
var fs = require('fs');
const { response } = require('express');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', async function (req, res) {
  try {
    console.log(req.body.code, "token");
    const excode = req.body.code
    const token = await axios.get(`https://connect.deezer.com/oauth/access_token.php?app_id=476242&secret=0d7bebada39dcf0431e46a816c612123&code=${excode}&output=json`)
    if(token.data.error){
      return res.status(400).json(token.data.error)
     }
    console.log(token, 'token2')

    const userDetails = await axios.get(`https://api.deezer.com/user/me?access_token=${token.data.access_token}`)
    if(userDetails.data.error){
      return res.status(400).json(userDetails.data.error)
     }


    // const recommendedAlbums = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/recommendations/albums?access_token=${token.data.access_token}`)

    // const lastPlayed = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/history?access_token=${token.data.access_token}`)

    // const artists = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/artists?access_token=${token.data.access_token}`)

    // const recommendedArtists = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/recommendations/artists?access_token=${token.data.access_token}`)

    // const genre = await axios.get(`https://api.deezer.com/genre?access_token=${token.data.access_token}`)

    // const charts = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/charts?access_token=${token.data.access_token}`)

    // const playlists = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/playlists?access_token=${token.data.access_token}`)

    // const recommendedPlaylists = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/recommendations/playlists?access_token=${token.data.access_token}`)

    // const recommendedRadios = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/recommendations/radios?access_token=${token.data.access_token}`)

    // const recommendedTracks = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/recommendations/tracks?access_token=${token.data.access_token}`)

    // const recommendedReleases = await axios.get(`https://api.deezer.com/user/${userDetails.data.id}/recommendations/releases?access_token=${token.data.access_token}`)
    
    // const results = [userDetails.data, recommendedAlbums.data, lastPlayed.data, artists.data, recommendedArtists.data, genre.data, charts.data, recommendedTracks.data, recommendedReleases.data, playlists.data, recommendedPlaylists.data, token.data.access_token]

    const results = [token.data.access_token, userDetails.data, userDetails.data.id]

    res.status(200).json(results)
  }
  catch (error) {
    res.status(400).json(error)
  
  }

});




module.exports = router;
