const Order = require("../models/Order");

// @desc    Get all orders
// @route   GET /api/v1/orders
// @access  Public
exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();

    res.status(200).json({ success: true, count: Orders.length, data: orders });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single order
// @route   GET /api/v1/orders/:id
// @access  Public
exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: order });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Public
exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update order
// @route   PUT /api/v1/orders/:id
// @access  Private
exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!order) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: order });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete order
// @route   DELET /api/v1/orders/:id
// @access  Public
exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id);

    if (!order) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
