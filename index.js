import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'

const app = express();

app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Local MongoDB connection URL
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecom'; // Replace 'mydatabase' with your DB name

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



