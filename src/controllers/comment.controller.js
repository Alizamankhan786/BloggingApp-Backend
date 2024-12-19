import Comment from "../models/comment.model.js"

// Add Comment
const addComment = async (req, res) => {
  const { content } = req.body;
  const { blogId } = req.params;
  try {
    const comment = await Comment.create({
      content,
      blog: blogId,
    });

    res.status(201).json({ success: true, comment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


// Get Comments for a Blog
const getCommentsForBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const comments = await Comment.find({ blog: blogId });
    res.status(200).json({ success: true, comments });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};



export {addComment , getCommentsForBlog};