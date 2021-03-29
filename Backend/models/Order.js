const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
  meal: {
    type: mongoose.Schema.ObjectId,
    ref: "Meal",
    required: true,
  },
  q: Number,
  addons: Number,
  price: Number,
  total: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
