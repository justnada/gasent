const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name can not be empty"],
  },
});

module.exports = mongoose.model("category", categorySchema);
