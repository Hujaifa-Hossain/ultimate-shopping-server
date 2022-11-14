const mongoose = require("mongoose");

const product_model = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true},
  size: { type: Array, required: true},
  color: {type: String, required: true},
  description: { type: String, required: true },
});





const product = mongoose.model("product", product_model);

module.exports = {
  product,
};
