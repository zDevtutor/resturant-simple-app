const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["Fruits", "Vegetables", "Carbs", "Meats"],
  },
});

module.exports = mongoose.model("Category", CategorySchema);
