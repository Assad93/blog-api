import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  categories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "categories", required: true },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: true,
  },
  views: { type: Number, required: true },
});

const posts = mongoose.model("posts", PostSchema);

export default posts;
