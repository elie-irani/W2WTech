var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
/* GET pomace page. */
router.get('/pomace', function(req, res, next) {
  res.render('pomace');
});
/* GET yeast page. */
router.get('/brewersgold', function(req, res, next) {
  res.render('brewersgold');
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});
module.exports = router;
