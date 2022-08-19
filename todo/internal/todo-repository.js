const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

class TodoRepository {
  static async createDBConnect() {
    mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(`MongoDB connected to server: ${data.connection.host}`);
      })
      .catch((err) => {
        //console.log("Shubham")
        console.log(err);
      });
  }
}
module.exports = TodoRepository;
