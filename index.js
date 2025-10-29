import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'
import dotenv from "dotenv";

// Load different env file depending on NODE_ENV
if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.production" });
} else {
    dotenv.config({ path: ".env" });
}

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

// Local MongoDB connection URL
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB locally')

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err)
        process.exit(1);
    });

app.use('api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});



