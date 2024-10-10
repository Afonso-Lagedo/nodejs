var http = require("http");

http
  .createServer(function (req, res) {
    res.end("Hello World");
  })
  .listen(3300);

console.log("Server is running on port 3300");
