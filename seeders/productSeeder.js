import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// MongoDB connection URL
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecom'; // Ensure this is set in your .env file

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB for seeding');
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });

const generateFakeProducts = (count = 100) => {
    const products = [];
    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange'];
    const tags = ['fashion', 'lifestyle', 'denim', 'streetstyle', 'crafts'];

    for (let i = 0; i < count; i++) {
        products.push({
            name: faker.commerce.productName(),
            image: '/frontend/images/product-01.jpg',
            price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
            description: faker.commerce.productDescription(),
            inStock: faker.datatype.boolean(),
            noOfSales: faker.number.int({ min: 0, max: 1000 }),
            color: faker.helpers.arrayElements(colors),
            tags: faker.helpers.arrayElements(tags),
        });
    }

    return products;
};

// Insert fake data into MongoDB
const seedDB = async () => {
    const fakeProducts = generateFakeProducts(100);
    await Product.insertMany(fakeProducts);
    console.log('Fake products inserted!');
    mongoose.connection.close();
};

await seedDB();