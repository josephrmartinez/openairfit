var express = require('express');
var router = express.Router();

const index_controller = require("../controllers/indexController")

/* GET home page. */
router.get('/', index_controller.index);

// router.get('/:city', function(req, res, next) {
//   res.render('activities', {title: req.params.city});
// });


module.exports = router;
