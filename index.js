import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

// Local MongoDB connection URL
const MONGO_URI = 'mongodb+srv://rahamatj:162002025@ecom.m8h6nnq.mongodb.net/?appName=ecom'
// const MONGO_URI = 'mongodb://localhost:27017/ecom'

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

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});



