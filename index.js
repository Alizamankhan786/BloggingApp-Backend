import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';
import userRoutes from "./src/routes/user.routes.js";
import blogRoutes from "./src/routes/blog.routes.js";
import commentRoutes from "./src/routes/comment.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 3000

app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', blogRoutes);
app.use('/api/v1', commentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });


// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message });
});