const model = require("../models/model");

const post_products = (req, res) => {
  const create = new model.product({
    name: "Apple",
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


  // const result = await carCollection
  //     .find({
  //       _id: ObjectId(req.params.id),
  //     })
  //     .toArray();
  //   res.send(result);
}


module.exports = { post_products, get_products, get_product };