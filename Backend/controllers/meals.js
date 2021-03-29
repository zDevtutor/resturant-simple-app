const Meal = require("../models/Meal");

// @desc    Get all meals
// @route   GET /api/v1/meals
// @access  Public
exports.getMeals = async (req, res, next) => {
  try {
    const meals = await Meal.find();

    res.status(200).json({ success: true, count: meals.length, data: meals });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single meal
// @route   GET /api/v1/meals/:id
// @access  Public
exports.getMeal = async (req, res, next) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: meal });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new meal
// @route   POST /api/v1/meals
// @access  Private
exports.createMeal = async (req, res, next) => {
  try {
    const meal = await Meal.create(req.body);

    res.status(201).json({ success: true, data: meal });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update meal
// @route   PUT /api/v1/meals/:id
// @access  Private
exports.updateMeal = async (req, res, next) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!meal) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: meal });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete meal
// @route   DELET /api/v1/meals/:id
// @access  Private
exports.deleteMeal = async (req, res, next) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id);

    if (!meal) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
