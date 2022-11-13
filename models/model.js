const mongoose = require("mongoose");

const product_model = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const product = mongoose.model("product", product_model);

module.exports = {
  product,
};
