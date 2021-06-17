var express = require('express');
var router = express.Router();
var axios = require('axios')
const { response } = require('express');
// const session = require('express-session');


router.post('/', async function (req, res) {

    try {

        const id = req.body.id
        const trackId = req.body.trackId
  
        const accessToken = req.body.accessToken
        
        const addFavTrack = await axios.post(`https://api.deezer.com/user/${id}/tracks?track_id=${trackId}&access_token=${accessToken}`)
        console.log(addfavTrack, 'response')
        res.status(200).json(addFavTrack.data)
    }
    catch (error) {
        res.status(400).json(error)
    }
});


router.get('/', function (req, res) {
    console.log('Inside Home Login');
    res.send("You  hit the addfavTrack route")
});




module.exports = router;



