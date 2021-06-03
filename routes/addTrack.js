var express = require('express');
var router = express.Router();
var axios = require('axios')
const { response } = require('express');
// const session = require('express-session');


router.post('/', async function (req, res) {

    try {
        console.log(req.body, 'req')
        const playlistId = req.body.playlistId
        const playlistTrackId = req.body.trackId
        const accessToken = req.body.accessToken
        
        const addTrack = await axios.post(`https://api.deezer.com/playlist/${playlistId}/tracks?songs=${playlistTrackId}&access_token=${accessToken}`)
        console.log(addTrack, 'response')
        res.status(200).json(addTrack.data)
    }
    catch (error) {
        res.status(400).json(error)
        // console.log(error, 'error')
    }
});


router.get('/', function (req, res) {
    console.log('Inside Home Login');
    res.send("You  hit the addTrack route")
});




module.exports = router;



