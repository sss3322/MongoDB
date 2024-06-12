const Product = require("../Model/ProductSchema");

const createProduct = async (req, res) => {
    const { name, description, category, price } = req.body;
    const product = await Product.create({
        name,
        description,
        category,
        price
    });
    res.json(product);
};

const getProduct = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        res.json("Product not found");
    } else {
        res.json(product);
    }
};

const deleteProductById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    res.json("Product deleted");
};

const updateProductById = async (req, res) => {
    const id = req.params.id;
    const { name, description, category, price } = req.body;
    const product = await Product.findByIdAndUpdate(id,
        {
            name,
            description,
            category,
            price
        }
    );
    res.json(product);
};

module.exports = { createProduct, getProduct, getProductById, deleteProductById, updateProductById };
