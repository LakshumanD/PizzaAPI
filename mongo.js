const { MongoClient } = require("mongodb");
const MONGO_URL = "mongodb://localhost:27017";
const MONGO_DBNAME = "Pizza";
const mongo = {
  db: null,

  async Connect() {
    try {
      const client = new MongoClient(
        "mongodb+srv://admin:1234@lakshman.4dwgr.mongodb.net/Lakshman?retryWrites=true&w=majority"
      );
      await client.connect();
      console.log(`Mongo DB Connected successfully...`);

      this.db = await client.db(MONGO_DBNAME);
      console.log(`Selected database ${MONGO_DBNAME}`);
    } catch (err) {
      console.log(`error connecting th db ${err}`);
    }
  },
};
module.exports = mongo;
