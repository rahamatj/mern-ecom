import express from 'express';
import Product from "../models/Product.js";
import {faker} from "@faker-js/faker";

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find();

    return res.status(200).json(products);
});

export default router;