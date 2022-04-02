import express from "express";
import AuthorRouter from "./AuthorRouter.js";
import CategoryRouter from "./CategoryRouter.js";
import PostRouter from "./PostRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Seja bem vindo a blog-api!");
  });

  app.use(express.json(), AuthorRouter, CategoryRouter, PostRouter);
};

export default routes;
