//import library
const Sequelize = require("sequelize");
//keys
const sequelize = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

/*sequelize
  .authenticate() //veficar se a conexão foi bem sucedida
  .then(function () {
    console.log("Conexão realizada com Sucesso!");
  }) //se sim
  .catch(function (err) {
    console.log("Erro ao conectar com o banco de dados: " + err);
  }); //se não*/

//create table
const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

//conexao com o banco de dados
//Postagem.sync({ force: true });

const Usuario = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

//Usuario.sync({ force: true });

//ISERT
/*Postagem.create({
  titulo: "Um titulo qualquer",
  conteudo: "Um conteudo qualquer",
});*/

/*Usuario.create({
  nome: "Afonso",
  sobrenome: "Silva",
  idade: 22,
  email: "@teste",
});*/
