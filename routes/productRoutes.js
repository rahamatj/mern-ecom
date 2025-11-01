import express from 'express';
import Product from "../models/Product.js";
import {faker} from "@faker-js/faker";

const router = express.Router();

router.get(`/paginate`, async (req, res) => {

    let page = 1;
    let limit = 16;

    if (req.query.page) {
        page = Number(req.query.page);
    }

    if (req.query.limit) {
        limit = Number(req.query.limit);
    }

    const skip = (page - 1) * limit

    let products = []

    try {
        products = await Product.find().skip(skip).limit(limit);
    } catch (e) {
        console.error(e)
    }

    return res.status(200).json(products);
});

router.get(`/search`, async (req, res) => {

    const search = req.query.search;

    if (search) {
        const products = await Product.find({
            name: { $regex: search, $options: "i" }
        });

        return res.status(200).json(products);
    } else {
        return res.status(404).json({msg: "Product not Found"});
    }
});

export default router;