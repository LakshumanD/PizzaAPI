const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
const mongo = require("./mongo");
const registerRoutes = require("./routes/register.routes");
const pizzaRoutes = require("./routes/pizza.routes");

const cors = require("cors");
(async () => {
  try {
    await mongo.Connect();

    // middleware
    app.use(express.json());
    app.use(cors());

    //routes
    app.use("/Pizza", pizzaRoutes);
    app.use("/users", registerRoutes);

    //listen the port
    app.listen(PORT, (req, res) => {
      console.log("request port " + PORT);
    });
  } catch (err) {
    console.log(`error starting app ${err}`);
  }
})();
