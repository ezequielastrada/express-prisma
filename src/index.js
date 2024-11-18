import express from 'express';
import categoriesRoutes from './routes/categories.routes.js';

const app = express();
app.use(express.json());

app.use("/api", categoriesRoutes);

app.listen(3000);
console.log('Server pn port', 3000);