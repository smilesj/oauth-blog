var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.redirect('https://apis.daum.net/oauth2/authorize?response_type=code&client_id=1234567890&redirect_uri=http://172.16.99.99:3000/oauthCallback');
});

module.exports = router;