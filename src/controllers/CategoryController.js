import categories from "../models/Categories.js";

export default class CategoryController {
  static getCategories = (req, res) => {
    categories
      .find()
      .populate("subcategories")
      .exec((err, categories) => {
        if (!err) {
          res.json(categories);
        } else {
          res
            .status(500)
            .json({ message: `${err.message} - get categories is failed` });
        }
      });
  };

  static getCategoriesById = (req, res) => {
    const id = req.params.id;

    categories
      .findById(id)
      .populate("subcategories")
      .exec((err, category) => {
        if (!err) {
          res.json(category);
        } else {
          res
            .status(400)
            .json({ message: `${err.message} - category id isn't valid` });
        }
      });
  };

  static createCategory = (req, res) => {
    const category = new categories(req.body);

    category.save((err) => {
      if (!err) {
        res.status(201).json({ message: "Category registered successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - create category is failed` });
      }
    });
  };

  static updateCategory = (req, res) => {
    const id = req.params.id;

    categories.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.json({ message: "Category updated successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - update category is failed` });
      }
    });
  };

  static deleteCategory = (req, res) => {
    const id = req.params.id;

    categories.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.json({ message: "Category deleted successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - delete category is failed` });
      }
    });
  };
}
