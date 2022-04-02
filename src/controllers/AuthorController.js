import authors from "../models/Author.js";

export default class AuthorController {
  static getAuthors = (req, res) => {
    authors.find((err, authors) => {
      if (!err) {
        res.json(authors);
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - get authors is failed` });
      }
    });
  };

  static getAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, author) => {
      if (!err) {
        res.json(author);
      } else {
        res
          .status(400)
          .json({ message: `${err.message} - author id isn't valid` });
      }
    });
  };

  static createAuthor = (req, res) => {
    const author = new authors(req.body);

    author.save((err) => {
      if (!err) {
        res.status(201).json({ message: "Author registered successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - create author is failed` });
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).json({ message: "Author updated successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - update author is failed` });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).json({ message: "Author deleted successfully!" });
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - delete author is failed` });
      }
    });
  };
}
