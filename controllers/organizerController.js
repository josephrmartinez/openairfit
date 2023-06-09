const Organizer = require("../models/organizer");
const asyncHandler = require("express-async-handler");

// Display list of all organizers.
exports.organizer_list = asyncHandler(async (req, res, next) => {
  const allOrganizers = await Organizer.find({}, "first_name last_name")
    .sort({ last_name: 1 })
    .exec();
  res.render("organizers_list", {title: "Organizers", organizer_list: allOrganizers})
});

// Display detail page for a specific organizer.
exports.organizer_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: organizer detail: ${req.params.id}`);
});

// Display organizer create form on GET.
exports.organizer_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: organizer create GET");
});

// Handle organizer create on POST.
exports.organizer_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: organizer create POST");
});

// Display organizer delete form on GET.
exports.organizer_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: organizer delete GET");
});

// Handle organizer delete on POST.
exports.organizer_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: organizer delete POST");
});

// Display organizer update form on GET.
exports.organizer_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: organizer update GET");
});

// Handle organizer update on POST.
exports.organizer_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: organizer update POST");
});
