import express from "express";
import db from "./config/dbConfig.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Falha na conexão!"));
db.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

routes(app);

export default app;
