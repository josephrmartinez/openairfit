const Activity = require("../models/activity");
const Participant = require("../models/participant");
const Category = require("../models/category");
const City = require("../models/city");
const Organizer = require("../models/organizer")

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");


exports.index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, authors and genre counts (in parallel)
  const [
    numCities,
    numActivities,
    numOrganizers,
    numParticipants,
    numCategories,
  ] = await Promise.all([
    City.countDocuments({}).exec(),
    Activity.countDocuments({}).exec(),
    Participant.countDocuments({}).exec(),
    Category.countDocuments({}).exec(),
    Organizer.countDocuments({}).exec(),
  ]);
  const allCities = await City.find({}, "name")
    .sort({ name: 1 })
    .exec();

  res.render("index", {
    title: "OpenAirFit",
    city_count: numCities,
    activity_count: numActivities,
    organizer_count: numOrganizers,
    participant_count: numParticipants,
    category_count: numCategories,
    city_list: allCities
  });
});
