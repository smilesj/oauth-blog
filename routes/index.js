var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  res.render('index', { title: 'Blog Post' });
});

module.exports = router;
