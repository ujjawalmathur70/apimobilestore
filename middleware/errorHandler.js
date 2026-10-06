const notFound = (req, res) => res.status(404).json({ message: `Route not found: ${req.originalUrl}` });

const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((e) => e.message).join(", ");
    return res.status(400).json({ message });
  }
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID" });
  }
  console.error(err);
  res.status(500).json({ message: err.message || "Server error" });
};

module.exports = { notFound, errorHandler };
