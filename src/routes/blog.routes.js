import express from 'express';
import { createBlog, getAllBlogs, updateBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.post('/create', createBlog);
router.get('/create', getAllBlogs);
router.put('/create/:id', updateBlog);


export default router;
