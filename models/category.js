const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 40 },
});


// Export model
module.exports = mongoose.model("Category", CategorySchema);