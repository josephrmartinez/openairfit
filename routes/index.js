var express = require('express');
var router = express.Router();

const activity_controller = require("../controllers/activityController")

/* GET home page. */
router.get('/', activity_controller.index);

router.get('/:city', function(req, res, next) {
  res.render('activities', {title: req.params.city});
});


module.exports = router;
