import express from 'express';
import { addComment, getCommentsForBlog } from "../controllers/comment.controller.js";

const router = express.Router();

router.post('/comment/:blogId', addComment);
router.get('/comment/:blogId', getCommentsForBlog);

export default router;
