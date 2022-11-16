const Products = require("../models/product_model");
const ObjectId = require('mongoose').ObjectId

const post_products = async (req, res) => {
  const create = new Products({
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
    category: req.body.category,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
  });

  let NewCreate = new Products({
    title: "Winter fall shoe",
    description: "A little amazing black shoe to wear in winter.",
    img: ["Shoe1.jpg", "Shoe2.jpg"],
    category: "Footwear",
    price: 240,
    color: "red",
    size: [40, 41, 42],
  });

  try {
    const saveProduct = await NewCreate.save();
    console.log(saveProduct);
    res.status(200).json(create);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

const get_products = async (req, res) => {
  let data = await Products.find({});
  try {
    res.json(data);
  } catch (error) {
    res.status(500).json(err);
  }
};

const get_product = async (req, res) => {
  // let data = await Products.find({
  //   _id: ObjectId(req.params.id),
  // })
  // .toArray();
  console.log(req.body)
  // try {
  //   // res.status(200).json(data);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
};

module.exports = { post_products, get_products, get_product };
