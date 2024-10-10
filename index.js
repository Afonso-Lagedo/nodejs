const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/teste", function (req, res) {
  res.send("Hello Teste");
});

//finally
app.listen(3031, function () {
  console.log("Server is running on port 3031");
});
