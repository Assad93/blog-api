import express from "express";
import CategoryController from "../controllers/CategoryController.js";

const router = express.Router();

router
  .get("/categories", CategoryController.getCategories)
  .get("/categories/:id", CategoryController.getCategoriesById)
  .post("/categories", CategoryController.createCategory)
  .put("/categories/:id", CategoryController.updateCategory)
  .delete("/categories/:id", CategoryController.deleteCategory);

export default router;
