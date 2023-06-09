const City = require("../models/city");
const Activity = require("../models/activity")
const asyncHandler = require("express-async-handler");

// Display list of all cities.
exports.city_list = asyncHandler(async (req, res, next) => {
  const allCities = await City.find({}, "name")
    .sort({ name: 1 })
    .exec();
  res.render("city_list", {title: "City List", city_list: allCities})
});

// Display detail page for a specific city.
exports.city_detail = asyncHandler(async (req, res, next) => {
  // Get details of city and all activities (in parallel)
  const [city, allActivities] = await Promise.all([
    City.findById(req.params.id).exec(),
    Activity.find({ city: req.params.id }, "title organizer summary category participants city season").exec(),
  ]);

  if (city === null) {
    // No results.
    const err = new Error("City not found");
    err.status = 404;
    return next(err);
  }

  res.render("city_detail", {
    title: "City Detail",
    city: city,
    all_activities: allActivities,
  });
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
