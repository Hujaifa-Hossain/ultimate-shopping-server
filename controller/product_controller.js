const Products = require("../models/product_model");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dwxbvjv8g",
  api_key: "936244713733828",
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const post_product = (req, res) => {
  const file = req.files.img;

  console.log(file);

  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {

    console.log(result);
    
    const product = new Products({
      title: req.body.title,
      description: req.body.description,
      img: result.url,
      category: req.body.category,
      price: req.body.price,
      color: req.body.color,
      size: req.body.size,
    });

    product.save().then(result1 => {
      res.status(200).json(result1)
    }).catch(err => {
      res.status(500).json(err.message);
    })
  });
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
    res.status(500).json(error);
  }
};

const delete_product = async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { post_product, get_products, get_product, delete_product };
