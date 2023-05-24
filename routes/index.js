var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OpenAirFit' });
});

router.get('/:city', function(req, res, next) {
  res.render('activities', {title: req.params.city});
});


module.exports = router;
