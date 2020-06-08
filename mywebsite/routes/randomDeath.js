var express = require('express');
var router = express.Router();
const https = require('https');

/* GET about page. */
router.get('/', function(req, res, next) {
  https.get('https://www.breakingbadapi.com/api/random-death', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // A chunk of data has been recieved.

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log("response received")
      res.render('randomDeath', {page:'Random Death', menuId:'randomDeath', breakingBadResponse: data});
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

module.exports = router;