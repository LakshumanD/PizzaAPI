const Router = require("express").Router();
const mongo = require("../mongo");

const services = require("../services/auth.servies");

// async (req, res) => {
//   console.log(req.params);
//   const data = await mongo.db.Registration.findOne({
//     username: req.params.username,
//   });

//   if (data) res.send(data);
//   else res.send("Invalid user name");
// };

Router.post("/Register", services.Register);
Router.post("/Login", services.Login);

module.exports = Router;
