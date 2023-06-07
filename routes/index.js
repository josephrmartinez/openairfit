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


// Activity Routes

// GET request for creating a activity. NOTE This must come before routes that display activity (uses id).
router.get("/activity/create", activity_controller.activity_create_get);

// POST request for creating activity.
router.post("/activity/create", activity_controller.activity_create_post);

// GET request to delete activity.
router.get("/activity/:id/delete", activity_controller.activity_delete_get);

// POST request to delete activity.
router.post("/activity/:id/delete", activity_controller.activity_delete_post);

// GET request to update activity.
router.get("/activity/:id/update", activity_controller.activity_update_get);

// POST request to update activity.
router.post("/activity/:id/update", activity_controller.activity_update_post);

// GET request for one activity.
router.get("/activity/:id", activity_controller.activity_detail);

// GET request for list of all activity items.
router.get("/activities", activity_controller.activity_list);


// Organizer Routes

// GET request for creating a organizer. NOTE This must come before routes that display organizer (uses id).
router.get("/organizer/create", organizer_controller.organizer_create_get);

// POST request for creating organizer.
router.post("/organizer/create", organizer_controller.organizer_create_post);

// GET request to delete organizer.
router.get("/organizer/:id/delete", organizer_controller.organizer_delete_get);

// POST request to delete organizer.
router.post("/organizer/:id/delete", organizer_controller.organizer_delete_post);

// GET request to update organizer.
router.get("/organizer/:id/update", organizer_controller.organizer_update_get);

// POST request to update organizer.
router.post("/organizer/:id/update", organizer_controller.organizer_update_post);

// GET request for one organizer.
router.get("/organizer/:id", organizer_controller.organizer_detail);

// GET request for list of all organizer items.
router.get("/organizers", organizer_controller.organizer_list);


// participant routes
// GET request for creating a participant. NOTE This must come before routes that display participant (uses id).
router.get("/participant/create", participant_controller.participant_create_get);

// POST request for creating participant.
router.post("/participant/create", participant_controller.participant_create_post);

// GET request to delete participant.
router.get("/participant/:id/delete", participant_controller.participant_delete_get);

// POST request to delete participant.
router.post("/participant/:id/delete", participant_controller.participant_delete_post);

// GET request to update participant.
router.get("/participant/:id/update", participant_controller.participant_update_get);

// POST request to update participant.
router.post("/participant/:id/update", participant_controller.participant_update_post);

// GET request for one participant.
router.get("/participant/:id", participant_controller.participant_detail);

// GET request for list of all participant items.
router.get("/participants", participant_controller.participant_list);

module.exports = router;
