const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category: { type: String, required: true, maxLength: 40 },
});


// Export model
module.exports = mongoose.model("Category", CategorySchema);