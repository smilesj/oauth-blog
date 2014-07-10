var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res) {
	var blogName = "19smilesj";
  	var accessToken = req.session.access;

	request( {
		method: "GET",
		url: "https://apis.daum.net/blog/v1/" + blogName +"/list.json",
		headers: {
			Authorization: "Bearer " + accessToken
		}
	}, function(err, response, body) {
		var tmpToken = JSON.parse(body);
		var list_item = tmpToken.channel.item;
		var tmpString = "";
		for(var i = 0; i < tmpToken.channel.totalCount; i++){
			tmpString += list_item[i].title + "<br>";
		}
		res.send(tmpString);	
	});
});

module.exports = router;