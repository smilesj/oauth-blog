var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res) {
  var authcode = req.query.code;

  //access token 요청
	request( {
		method: "POST",
		url: "https://apis.daum.net/oauth2/token",
		form: {
			grant_type: "authorization_code",
			code: authcode,
			client_id: "1234567890",
			client_secret: "75fba1",
			redirect_uri: "http://172.16.99.99:3000/oauthList",
		}
	}, function(err, response, body) {
		var tmpToken = JSON.parse(body);
		var accessToken = tmpToken.access_token;
		
		//session에 accessToken 전달
		req.session.access = accessToken;
		res.render('index', { title: "TT" });
		
	});
});

module.exports = router;