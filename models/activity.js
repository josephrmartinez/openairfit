const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: { type: String, required: true },
  organizer: [{ type: Schema.Types.ObjectId, ref: "Organizer", required: true }],
  summary: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    participants: [{ type: Schema.Types.ObjectId, ref: "Participant", required: true }],
  city: { type: String, required: true },
  season: {
    type: String,
    enum: ["Seasonal", "Year-round", ""],
    default: "",
  },
  
});

// Export model
module.exports = mongoose.model("Activity", ActivitySchema);