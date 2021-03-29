const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxLength: [50, "Name can not be more that 50 characters"],
  },
  description: {
    type: String,
    maxLength: [500, "Description can not be more that 500 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please add the price"],
  },
  photo: {
    type: String,
    default: "no-photo.png",
  },
});

module.exports = mongoose.model("Meal", MealSchema);
