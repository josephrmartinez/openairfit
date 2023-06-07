const Activity = require("../models/activity");
const asyncHandler = require("express-async-handler");

// Display list of all activities.
exports.activity_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: activity list");
});

// Display detail page for a specific activity.
exports.activity_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: activity detail: ${req.params.id}`);
});

// Display activity create form on GET.
exports.activity_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: activity create GET");
});

// Handle activity create on POST.
exports.activity_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: activity create POST");
});

// Display city delete form on GET.
exports.activity_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: activity delete GET");
});

// Handle activity delete on POST.
exports.activity_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: activity delete POST");
});

// Display activity update form on GET.
exports.activity_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: activity update GET");
});

// Handle activity update on POST.
exports.activity_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: activity update POST");
});
