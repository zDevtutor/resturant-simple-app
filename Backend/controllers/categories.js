const Category = require("../models/Category");

// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  Public
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    res
      .status(200)
      .json({ success: true, count: categories.length, data: categories });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
