const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Model name is required"], trim: true },
    brand: { type: String, required: [true, "Brand is required"], trim: true },
    price: { type: Number, required: [true, "Price is required"], min: [0, "Price cannot be negative"] },
    ram: { type: String, trim: true, default: "" },
    storage: { type: String, trim: true, default: "" },
    color: { type: String, trim: true, default: "" },
    stock: { type: Number, default: 0, min: [0, "Stock cannot be negative"] },
    image: { type: String, trim: true, default: "" },
    description: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mobile", mobileSchema);
