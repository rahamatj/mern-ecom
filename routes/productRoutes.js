import express from 'express';
import Product from "../models/Product.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find();

    return res.status(200).json(products);
});

export default router;