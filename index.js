const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/teste", function (req, res) {
  res.send("Hello Teste");
});

app.get("/hi/:nome/:idade", function (req, res) {
  //res.send(req.params);
  res.send(req.params.nome);
});

//route to file
app.get("/html", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

//finally
app.listen(3031, function () {
  console.log("Server is running on port 3031");
});
