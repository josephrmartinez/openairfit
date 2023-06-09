const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 40 },
});


// Virtual for city URL
CitySchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/city/${this._id}`;
});

// Export model
module.exports = mongoose.model("City", CitySchema);