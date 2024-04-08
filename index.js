import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import sectorsRoutes from "./routes/sectorsRoutes.js";
import issuesRoutes from "./routes/issuesRoutes.js";
import ratesRoutes from "./routes/ratesRoutes.js";
import packagesRoutes from "./routes/packageRoutes.js";
import bannersRoutes from "./routes/bannersRoutes.js";
import articlesRoutes from "./routes/articlesRoutes.js";
import latestNewsRoutes from "./routes/latestNewsRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/sectors', sectorsRoutes);
app.use('/api/issues',  issuesRoutes);
app.use('/api/rates',  ratesRoutes);
app.use('/api/packages', packagesRoutes);
app.use('/api/banners', bannersRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/latest-news', latestNewsRoutes);


// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & Listening on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  });