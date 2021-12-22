const mongo = require("../mongo");

const servicesPizza = {
  async Create(req, res) {
    try {
      req.body.Name = req.body.Name.toLowerCase();
      const user = await mongo.db.collection("Product").findOne({
        Name: req.body.Name,
      });

      if (user) return res.status(400).send("Product already exists...");

      const data = await mongo.db.collection("Product").insertOne(req.body);

      return res.send({
        data: data,
        message: "Product created successfully...",
      });
    } catch (err) {
      res.send(err);
    }
  },
  async Details(req, res) {
    try {
      const data = await mongo.db.collection("Product").find().toArray();

      return res.send({
        data: data,
      });
    } catch (err) {
      res.send(err);
    }
  },
};
module.exports = servicesPizza;
