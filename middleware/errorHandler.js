const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Invalid MongoDB ObjectId
  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, error: `Invalid recipe ID format` });
  }

  // Duplicate field error
  if (err.code === 11000) {
    return res.status(400).json({ success: false, error: 'Duplicate field value entered' });
  }

  // Validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({ success: false, error: messages });
  }

  res.status(500).json({
    success: false,
    error: 'Server Error',
  });
};

module.exports = errorHandler;
