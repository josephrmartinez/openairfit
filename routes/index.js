var express = require('express');
var router = express.Router();

const index_controller = require("../controllers/indexController")
const activity_controller = require("../controllers/activityController")
const category_controller = require("../controllers/categoryController")
const city_controller = require("../controllers/cityController")
const organizer_controller = require("../controllers/organizerController")
const participant_controller = require("../controllers/participantController")

/* GET home page. */
router.get('/', index_controller.index);

// City routes
// GET request for creating a City. NOTE This must come before routes that display City (uses id).
router.get("/city/create", city_controller.city_create_get);

// POST request for creating city.
router.post("/city/create", city_controller.city_create_post);

// GET request to delete city.
router.get("/city/:id/delete", city_controller.city_delete_get);

// POST request to delete city.
router.post("/city/:id/delete", city_controller.city_delete_post);

// GET request to update city.
router.get("/city/:id/update", city_controller.city_update_get);

// POST request to update city.
router.post("/city/:id/update", city_controller.city_update_post);

// GET request for one city.
router.get("/city/:id", city_controller.city_detail);

// GET request for list of all city items.
router.get("/cities", city_controller.city_list);




module.exports = router;
