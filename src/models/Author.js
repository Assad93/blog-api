import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String },
  age: { type: Number },
  gender: { type: String },
  bio: { type: String, required: true, maxlength: 255 },
});

const authors = mongoose.model("autores", AuthorSchema);

export default authors;
