const express = require("express");
const router = express.Router();

// Require controller modules.
// const activity_controller = require("../controllers/activityController");

// const organizer_controller = require("../controllers/organizer Controller");
// const category_controller = require("../controllers/categoryController");
// const book_instance_controller = require("../controllers/bookinstanceController");

/// ACTIVITY ROUTES ///

// GET catalog home page.
router.get("/", activities_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/activity/create", book_controller.activity_create_get);

// POST request for creating Book.
router.post("/activity/create", book_controller.activity_create_post);

// GET request to delete Book.
router.get("/activity/:id/delete", book_controller.activity_delete_get);

// POST request to delete Book.
router.post("/activity/:id/delete", book_controller.activity_delete_post);

// GET request to update Book.
router.get("/activity/:id/update", book_controller.activity_update_get);

// POST request to update Book.
router.post("/activity/:id/update", book_controller.activity_update_post);

// GET request for one Book.
router.get("/activity/:id", book_controller.activity_detail);

// GET request for list of all Book items.
router.get("/activities", book_controller.activity_list);

/// ORGANIZER ROUTES ///

// GET request for creating organizer . NOTE This must come before route for id (i.e. display organizer).
router.get("/organizer/create", organizer_controller.organizer_create_get);

// POST request for creating organizer.
router.post("/organizer/create", organizer_controller.organize_create_post);

// GET request to delete organizer.
router.get("/organizer/:id/delete", organizer_controller.organizer_delete_get);

// POST request to delete organize.
router.post("/organizer/:id/delete", organizer_controller.organize_delete_post);

// GET request to update organizer.
router.get("/organizer/:id/update", organizer_controller.organizer_update_get);

// POST request to update organize.
router.post("/organizer/:id/update", organizer_controller.organize_update_post);

// GET request for one organizer  .
router.get("/organizer/:id", organizer_controller.organize_detail);

// GET request for list of all organizers.
router.get("/organizers", organizer_controller.organizer_list);

/// CATEGORY ROUTES ///

// GET request for creating a category. NOTE This must come before route that displays category (uses id).
router.get("/category/create", category_controller.category_create_get);

//POST request for creating category.
router.post("/category/create", category_controller.category_create_post);

// GET request to delete category.
router.get("/category/:id/delete", category_controller.category_delete_get);

// POST request to delete category.
router.post("/category/:id/delete", category_controller.category_delete_post);

// GET request to update category.
router.get("/category/:id/update", category_controller.category_update_get);

// POST request to update category.
router.post("/category/:id/update", category_controller.category_update_post);

// GET request for one category.
router.get("/category/:id", category_controller.category_detail);

// GET request for list of all categories.
router.get("/categories", category_controller.category_list);

// /// BOOKINSTANCE ROUTES ///

// // GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
// router.get(
//   "/bookinstance/create",
//   book_instance_controller.bookinstance_create_get
// );

// // POST request for creating BookInstance.
// router.post(
//   "/bookinstance/create",
//   book_instance_controller.bookinstance_create_post
// );

// // GET request to delete BookInstance.
// router.get(
//   "/bookinstance/:id/delete",
//   book_instance_controller.bookinstance_delete_get
// );

// // POST request to delete BookInstance.
// router.post(
//   "/bookinstance/:id/delete",
//   book_instance_controller.bookinstance_delete_post
// );

// // GET request to update BookInstance.
// router.get(
//   "/bookinstance/:id/update",
//   book_instance_controller.bookinstance_update_get
// );

// // POST request to update BookInstance.
// router.post(
//   "/bookinstance/:id/update",
//   book_instance_controller.bookinstance_update_post
// );

// // GET request for one BookInstance.
// router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// // GET request for list of all BookInstance.
// router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
