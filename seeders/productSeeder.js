import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import Product from '../models/Product.js'; // your Product schema

const MONGO_URI="mongodb+srv://rahamatj:162002025@ecom.m8h6nnq.mongodb.net/?appName=ecom"
// const MONGO_URI = 'mongodb://localhost:27017/ecom'

const seedProducts = async (count = 100) => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB');

        // Optional: Clear existing products
        await Product.deleteMany({});
        console.log('🧹 Cleared existing products');

        // Generate fake products
        const products = Array.from({ length: count }).map(() => ({
            name: faker.commerce.productName(),
            image: `/frontend/images/product-${faker.number.int({ min: 1, max: 16 })}.jpg`,
            price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
            description: faker.commerce.productDescription(),
            inStock: faker.datatype.boolean(),
            noOfSales: faker.number.int({ min: 0, max: 1000 }),
            color: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.color.human()),
            tags: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => faker.commerce.productAdjective()),
        }));

        await Product.insertMany(products);
        console.log(`🎉 Successfully inserted ${count} products`);

        await mongoose.connection.close();
        console.log('🔌 MongoDB connection closed');

        process.exit(1);
    } catch (error) {
        console.error('❌ Error seeding products:', error);

        process.exit(1);
    }
};

// Run the seeder
seedProducts(100);
