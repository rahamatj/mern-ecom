import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'

const app = express();

const allowedOrigins = [
    'http://mern-ecom.xyz',
    'http://localhost:5173',
    'https://mern-ecom-client-7qb2.onrender.com'
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true); // origin allowed
        } else {
            callback(new Error('Not allowed by CORS')); // origin not allowed
        }
    },
    credentials: true, // if you want to allow cookies
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

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



