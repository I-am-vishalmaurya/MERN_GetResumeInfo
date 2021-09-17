const { Router } = require("express");
const express = require("express");
const userModel = require("../model/userSchema");
const router = express.Router();
require('../database/connection')

router.get("/", (request, response) => {
  response.send("Hello World");
});

router.post("/register", (request, response) => {
  const {
    username,
    email,
    password,
    confirmpassword,
    firstName,
    lastName,
    phone,
  } = request.body;

  if (
    !username ||
    !email ||
    !password ||
    !confirmpassword ||
    !firstName ||
    !lastName ||
    !phone
  ) {
    return response.status(400).send({ error: "Please fill in all fields" });
  }
  if(password !== confirmpassword){
      return response.status(400).send({ error: "Passwords do not match" });
  }

  userModel
    .findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return response.status(400).send({ error: "User Already Exists" });
      }

      const user = new userModel({
        username,
        email,
        password,
        confirmpassword,
        firstName,
        lastName,
        phone
      });

      user.save().then(() => {
          return response.status(200).send({ message: "User Created" });
        })
        .catch((error) => {
          return response.status(500).send({ error: error });
        });
    })
    .catch((error) => {
      return console.log(error);
    });
});


router.post("/login", async (request, response) => {
    try{
        const { username, password} = request.body;
        if(!username || !password){
            return response.status(400).json({ error: "Please fill in all fields" });
        }
        console.log(username, password);
        const validUser = await userModel.findOne({ username });
        if(!validUser){
            return response.status(400).json({ error: "User Not Found" });
        }

        if(validUser){
            if(validUser.password !== password){
                return response.status(400).json({ error: "Password is incorrect" });
            }
            return response.status(200).json({ message: "User logged in" });
        }
    }   
    catch(error){
        return response.status(500).json({ error: error });
    }
})
module.exports = router;
