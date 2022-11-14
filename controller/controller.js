const model = require("../models/model");

const post_products = (req, res) => {
  const create = new model.product({
    name: "Shoe",
    price: 105,
    size: [7,8,9],
    color: '#070390',
    description: "An Apple for testing",
  });

  create.save((err) => {
    if (err) {
      res.status(400).json(`Message: Failed to create category ${err}`);
    } else {
      res.json(create);
      console.log(create);
    }
  });
};

const get_products = async (req, res) => {
  let data = await model.product.find({});
  try {
    res.json(data)
  } catch (error) {
    console.log(error);
  }
};

const get_product = async (req, res) => {
  let data = await model.product.findOne()
  try {
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}


module.exports = { post_products, get_products, get_product };