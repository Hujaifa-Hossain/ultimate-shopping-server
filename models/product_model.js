const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    // img: { type: String, required: true },
    category: { type: String },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    // size: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
