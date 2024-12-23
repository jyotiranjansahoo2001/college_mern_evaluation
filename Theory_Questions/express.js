const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/contact", (req, res) => {
  res.send("Contact");
});
app.get("/login", (req, res) => {
  res.send("<h1>You Have to LogIn</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});