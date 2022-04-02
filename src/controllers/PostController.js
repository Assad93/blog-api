import posts from "../models/Posts.js";

export default class PostController {
  static getPosts = (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    posts
      .find()
      .skip(limit * (page - 1))
      .limit(limit)
      .populate("author")
      .populate("categories")
      .exec((err, posts) => {
        if (!err) {
          res.json(posts);
        } else {
          res
            .status(500)
            .json({ message: `${err.message} - get posts is failed` });
        }
      });
  };

  static getPostsById = (req, res) => {
    const id = req.params.id;

    posts
      .findById(id)
      .populate("author")
      .populate("categories")
      .exec((err, post) => {
        if (!err) {
          res.json(post);
        } else {
          res
            .status(400)
            .json({ message: `${err.message} - post id isn't valid` });
        }
      });
  };

  static createPosts = (req, res) => {
    const post = new posts(req.body);

    post.save((err) => {
      if (!err) {
        res.status(201).json({ message: "Post registered successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - create post is failed` });
      }
    });
  };

  static updatePosts = (req, res) => {
    const id = req.params.id;

    posts.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.json({ message: "Post updated successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - update post is failed` });
      }
    });
  };

  static deletePosts = (req, res) => {
    const id = req.params.id;

    posts.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.json({ message: "Post deleted successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - delete post is failed` });
      }
    });
  };

  static postsByUser = (req, res) => {
    const id = req.params.id;

    posts
      .find({ author: id }, {})
      .populate("author")
      .populate("categories")
      .exec((err, posts) => {
        if (!err) {
          res.json(posts);
        } else {
          res
            .status(400)
            .json({ message: `${err.message} - author id isn't valid` });
        }
      });
  };

  static postsByCategories = (req, res) => {
    const id = req.params.id;

    posts
      .find({ categories: id }, {})
      .populate("author")
      .populate("categories")
      .exec((err, posts) => {
        if (!err) {
          res.json(posts);
        } else {
          res
            .status(400)
            .json({ message: `${err.message} - author id isn't valid` });
        }
      });
  };
}
