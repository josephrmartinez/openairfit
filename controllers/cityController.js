const City = require("../models/city");
const asyncHandler = require("express-async-handler");

// Display list of all cities.
exports.city_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: city list");
});

// Display detail page for a specific city.
exports.city_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: city detail: ${req.params.id}`);
});

// Display city create form on GET.
exports.city_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: city create GET");
});

// Handle city create on POST.
exports.city_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: city create POST");
});

// Display city delete form on GET.
exports.city_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: city delete GET");
});

// Handle city delete on POST.
exports.city_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: city delete POST");
});

// Display city update form on GET.
exports.city_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: city update GET");
});

// Handle city update on POST.
exports.city_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: city update POST");
});
