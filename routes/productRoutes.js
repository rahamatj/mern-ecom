import express from 'express';
import Product from "../models/Product.js";
import {faker} from "@faker-js/faker";

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find();

    return res.status(200).json(products);
});

router.get('/:page/:limit/', async (req, res) => {
    const page = req.params.page;
    const limit = req.params.limit;
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);

    // console.log(products);

    return res.status(200).json(products);
});

export default router;