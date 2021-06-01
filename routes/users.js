var express = require('express');
var router = express.Router();
var axios = require('axios')
const { response } = require('express');
// const session = require('express-session');


router.post('/',async function(req, res) {
  try {
    console.log(req.body, "tracklist");
    const trackcode = req.body.tracklist
    console.log(trackcode, 'trackcode')
const playlist = await axios.get(`${trackcode}`)
console.log(playlist.data)
res.status(200).json(playlist.data)

}
catch (error) {
  res.status(400).json(error)
  console.log(error, 'error')
}
 });


router.get('/', function(req, res) {
  console.log('Inside Home Login');
res.send("You  hit the users route")
});




module.exports = router;