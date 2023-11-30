class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const sendErrorResponse = (res, error) => {
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Internal Server Error"
  });
};

module.exports = {
  ErrorResponse,
  sendErrorResponse
};
