var express = require('express');
var router = express.Router();
var axios = require('axios')
const { response } = require('express');
// const session = require('express-session');


router.post('/', async function (req, res) {

    try {
        console.log(req.body, 'req')
        const playlistId = req.body.playlistId
        const playlistTrackId = req.body.playlistTrackId
        const accessToken = req.body.accessToken
        
        const deleteTrack = await axios.delete(`https://api.deezer.com/playlist/${playlistId}/tracks?songs=${playlistTrackId}&access_token=${accessToken}`)
        console.log(deleteTrack, 'response')
        res.status(200).json(deleteTrack.data)
    }
    catch (error) {
        res.status(400).json(error)
        // console.log(error, 'error')
    }
});

// router.post('/',async function(req, res){
//   try {
//     const playlistId = req.body.playlistId
//     const playlistTrackId = req.body.playlistTrackId
//     const accessToken = req.body.accessToken
//     console.log(playlistId, 'playlistId')
//     console.log(playlistTrackId, 'playlistTrackId')
//     console.log(accessToken, 'accessToken')

//     const deleteTrack = await axios.delete(`https://api.deezer.com/playlist/${playlistId}/tracks?songs=${playlistTrackId}&access_token=${accessToken}`)
// console.log(deleteTrack, 'response')
//     res.status(200).json('SUCCESS')
//   }
//   catch (error) {
//     res.status(400).json(error)
//     // console.log(error, 'error')
//   }

// })



router.get('/', function (req, res) {
    console.log('Inside Home Login');
    res.send("You  hit the users route")
});




module.exports = router;
