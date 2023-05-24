const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrganizerSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
});


// Export model
module.exports = mongoose.model("Organizer", OrganizerSchema);