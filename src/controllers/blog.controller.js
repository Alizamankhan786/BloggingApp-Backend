import Blog from '../models/blog.model.js';

// Create Blog
const createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = await Blog.create({
      title,
      content,
      author: req.user.id, // Assuming user ID comes from middleware
    });
    res.status(201).json({ success: true, blog });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get All Blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username email');
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update Blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, content, updatedAt: Date.now() },
      { new: true }
    );
    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


export {createBlog , getAllBlogs , updateBlog};