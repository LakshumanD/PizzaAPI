const { ObjectId } = require("mongodb");
const mongo = require("../mongo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const services = {
  async Register(req, res) {
    try {
      const user = await mongo.db.collection("users").findOne({
        username: req.body.username.toLowerCase(),
      });

      if (user)
        return res.send({ data: user, message: "user already exists..." });

      const salt = await bcrypt.genSalt();
      req.body.password = await bcrypt.hash(req.body.password, salt);

      const data = await mongo.db.collection("users").insertOne(req.body);

      return res.send({ data: data, message: "User created successfully..." });
    } catch (err) {
      res.send(err);
    }
  },
  async Login(req, res) {
    try {
      const user = await mongo.db.collection("users").findOne({
        username: req.body.username.toLowerCase(),
      });

      if (!user) return res.send({ message: "User is not available!" });

      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) return res.sendStatus(403);

      const token = jwt.sign({ userId: user._id }, "guvi123");

      return res.send({
        message: "User logged in successfully....",
        token: token,
      });
    } catch (err) {
      res.send(err);
    }
    //res.end();
  },
};
module.exports = services;
