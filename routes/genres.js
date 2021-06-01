var express = require('express');
var router = express.Router();
var axios = require('axios')
var fs = require('fs');
const { response } = require('express');

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.send('genres');
});

router.post('/', async function (req, res) {
  try {
 
    console.log(req.body, "tokbody");
    // console.log(req.body.token, "token");
    // console.log(req.body.userId, "userId");
    const token = req.body.accessToken
    const id = req.body.userId
    
     const genre = await axios.get(`https://api.deezer.com/genre?access_token=${token}`)
     if(genre.data.error){
        return res.status(400).json(genre.data.error)
       }

     const charts = await axios.get(`https://api.deezer.com/user/${id}/charts?access_token=${token}`)
     if(charts.data.error){
        return res.status(400).json(charts.data.error)
       }
  
    const results = [genre.data, charts.data]
    res.status(200).json(results)
  
  }

  catch (error) {
    res.status(400).json(error)
  }

});




module.exports = router;