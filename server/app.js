const dotenv = require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();

app.use(express.json());


const port = process.env.PORT;
require("./database/connection");

//Middleware for about me
const middleware = (req, res, next) => {
  next();
};
app.use(require("./router/auth"));
app.get("/about", middleware, (request, response) => {
  response.send("I am a web developer");
});

app.get("/contact", (request, response) => {
  response.send("Contact here");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
