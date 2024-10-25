const express = require("express");
const rotas = express();

const Sequelize = require("sequelize");

//###Banco de dados###
const conexaoBanco = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//###Banco de dados###
//create table
const Aluno = conexaoBanco.define("alunos", {
  nome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
});

//conectando com o banco de dados
Aluno.sync({ force: false }); //false após criar a tabela

//###Rotas###
rotas.get("/", function (req, res) {
  res.send("Rota principal");
});

//salvar //função que escuta
rotas.get("/salvar/:nome/:idade", async function (req, res) {
  //embalando o pacote
  const { nome, idade } = req.params;

  const novoAluno = await Aluno.create({ nome, idade }); //função que espera

  res.json({
    resposta: "Aluno criado com sucesso",
    aluno: novoAluno,
  });
});

// Exibir todos os alunos
rotas.get("/mostrar", async function (req, res) {
  const alunos = await Aluno.findAll(); // Busca todos os registros
  res.json(alunos); // Retorna os registros em formato JSON
});

// Editar aluno via ID, nome e idade como parâmetros
rotas.get("/editar/:id/:nome/:idade", async function (req, res) {
  const { id, nome, idade } = req.params;
  const idNumber = parseInt(id, 10); // Converte o ID para número

  const [updated] = await Aluno.update(
    { nome, idade },
    {
      where: { id: idNumber }, // Usa o ID numérico
    }
  );

  res.json({
    mensagem: "Aluno atualizado com sucesso",
  });
});

// Deletar aluno via ID
rotas.get("/deletar/:id", async function (req, res) {
  const { id } = req.params;
  const idNumber = parseInt(id, 10); // Converte o ID para número

  const deleted = await Aluno.destroy({
    where: { id: idNumber },
  });

  if (deleted) {
    res.json({ mensagem: "Aluno deletado com sucesso" });
  } else {
    res.status(404).json({ mensagem: "Aluno não encontrado" });
  }
});

//###Servidor###
rotas.listen(3031, function () {
  console.log("Server is running on port 3031");
});
