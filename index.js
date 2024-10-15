const express = require("express");
const app = express();
const { create } = require("express-handlebars");
const Sequelize = require("sequelize");

//Config

//Template Engine
/*
OLD FORM
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");*/

//NEW FORM
const hbs = create({ defaultLayout: "main" });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Conexão com o banco de dados
const sequelize = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//Rotas

app.get("/cad", function (req, res) {
  //res.send("Rota de cadastro de postagem");
  res.render("form"); //renderizando a pagina form.handlebars
});

//finally
app.listen(3031, function () {
  console.log("Server is running on port 3031");
});
