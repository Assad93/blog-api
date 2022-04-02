import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "categories" }],
});

const categories = mongoose.model("categories", CategorySchema);

export default categories;
