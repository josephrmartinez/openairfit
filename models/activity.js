const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: { type: String, required: true },
  organizer: [{ type: Schema.Types.ObjectId, ref: "Organizer", required: true }],
  summary: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    participants: [{ type: Schema.Types.ObjectId, ref: "Participant", required: true }],
  city: { type: Schema.Types.ObjectId, ref: "City" },
  season: {
    type: String,
    enum: ["Seasonal", "Year-round", ""],
    default: "",
  },
  
});

// Virtual for activity URL
ActivitySchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/:city/activity/${this._id}`;
});

// Export model
module.exports = mongoose.model("Activity", ActivitySchema);