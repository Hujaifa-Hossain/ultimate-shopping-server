const Products = require("../models/product_model");

const post_product = async (req, res) => {
  const create = new Products({
    title: req.body.title,
    description: req.body.description,
    // img: req.body.img,
    category: req.body.category,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
  });

  // let NewCreate = new Products({
  //   title: "Winter fall shoe",
  //   description: "A little amazing black shoe to wear in winter.",
  //   img: ["Shoe1.jpg", "Shoe2.jpg"],
  //   category: "Footwear",
  //   price: 330,
  //   color: "lightBlue",
  //   size: [40, 41, 42],
  // });

  try {
    const saveProduct = await create.save();
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
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error)
  }
};

const delete_product = async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json('Product deleted successfully!');
  } catch (error) {
    res.status(500).json(error)
  }
};

module.exports = { post_product, get_products, get_product, delete_product };
