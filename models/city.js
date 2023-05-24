const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 40 },
});


// Export model
module.exports = mongoose.model("City", CitySchema);