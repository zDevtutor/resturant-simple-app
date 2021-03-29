const express = require("express");
const {
  getMeals,
  getMeal,
  createMeal,
  updateMeal,
  deleteMeal,
} = require("../controllers/meals");

const router = express.Router();

router.route("/").get(getMeals).post(createMeal);

router.route("/:id").get(getMeal).put(updateMeal).delete(deleteMeal);

module.exports = router;
