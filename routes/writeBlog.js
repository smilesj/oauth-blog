var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
//router.post를 사용하면 post로 전달된 데이터를 받게 됌 ->???????
router.get('/', function(req, res) {
  console.log(req.query.title);
  var blogName = "19smilesj";
  var title = req.query.title;
  var content = req.query.content;
  var tag = req.query.tag;

  // session에서 accessToken을 가져옴.
  var accessToken = req.session.access;

  request( {
			method: "POST",
			url: "https://apis.daum.net/blog/v1/"+ blogName + "/write.json?title=" + title + "&content=" + content + "&tag=" + tag + "&appkey={your_appkey}" ,
			headers: {
				Authorization: "Bearer " + accessToken
			}
		}, function(err, response, body) {
			res.redirect('http://172.16.99.99:3000/oauthList');
	});
});

module.exports = router;
