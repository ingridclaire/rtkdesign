import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const PORT = process.env.PORT || 5000;

dotenv.config()

connectDB()

const app = express();

app.get('/', (req, res) => {
  res.send('api is running...');
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));