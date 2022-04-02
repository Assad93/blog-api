import express from "express";
import PostController from "../controllers/PostController.js";

const router = express.Router();

router
  .get("/posts", PostController.getPosts)
  .get("/posts/authors/:id", PostController.postsByUser)
  .get("/posts/categories/:id", PostController.postsByCategories)
  .get("/posts/:id", PostController.getPostsById)
  .post("/posts", PostController.createPosts)
  .put("/posts/:id", PostController.updatePosts)
  .delete("/posts/:id", PostController.deletePosts);

export default router;
