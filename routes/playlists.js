var express = require('express');
var router = express.Router();
var axios = require('axios')
var fs = require('fs');
const { response } = require('express');

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.send('playlists');
});

router.post('/', async function (req, res) {
  try {
 
    console.log(req.body, "tokbody");
    // console.log(req.body.token, "token");
    // console.log(req.body.userId, "userId");
    const token = req.body.accessToken
    const id = req.body.userId
    
    const playlists = await axios.get(`https://api.deezer.com/user/${id}/playlists?access_token=${token}`)
    if(playlists.data.error){
        return res.status(400).json(playlists.data.error)
       }

   const recommendedPlaylists = await axios.get(`https://api.deezer.com/user/${id}/recommendations/playlists?access_token=${token}`)
   if(recommendedPlaylists.data.error){
    return res.status(400).json(recommendedPlaylists.data.error)
   }
  
    const results = [playlists.data, recommendedPlaylists.data]
    res.status(200).json(results)
  
  }

  catch (error) {
    res.status(400).json(error)

  }

});




module.exports = router;