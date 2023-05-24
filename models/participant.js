const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 40 },
  last_name: { type: String, required: true, maxLength: 40 }
});


// Export model
module.exports = mongoose.model("Participant", ParticipantSchema);