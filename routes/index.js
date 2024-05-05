var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
/* GET pomace page. */
router.get('/pomACE', function(req, res, next) {
  res.render('pomACE');
});
/* GET yeast page. */
router.get('/yeast', function(req, res, next) {
  res.render('yeast');
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});
module.exports = router;
