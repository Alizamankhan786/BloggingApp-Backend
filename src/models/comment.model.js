import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        blog: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Blog"
        },
        likes: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            },
        ],
        
    },

    {
        timestamps: true,
    },
);

export default mongoose.model("Comment", CommentSchema);
