require("dotenv").config;

const { SECRET } = process.env;
const {User} = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET,
    {
      expiresIn: "3 days",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(password);
      let foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        res.status(400).send("Already a User");
      } else {
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await User.create({
          username,
          hashPass: hash,
        });
        let token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );
        const exp = Date.now() + 1000 * 60 * 60 * 72;
        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token: token,
          exp: exp,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username } });
      console.log(foundUser, "foundUser");
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashPass
        );
        if (isAuthenticated) {
          const token = createToken(
            foundUser.dataValues.username,
            foundUser.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60 * 72;
          res.status(200).send({
            username: foundUser.dataValues.username,
            userId: foundUser.dataValues.id,
            token,
            exp,
          });
        } else {
          res.status(400).send("No User found");
        }
      } else {
        res.status(400).send("No User Found");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
