const Router = require("express").Router();
const servicesPizza = require("../services/Pizza.services");

Router.post("/Create", servicesPizza.Create);
Router.get("/", servicesPizza.Details);
module.exports = Router;
