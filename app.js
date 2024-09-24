const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

//Use EJS as view-engie
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.render("login");

  const user = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  console.log(user, email, password);
});

app.listen(3000);
