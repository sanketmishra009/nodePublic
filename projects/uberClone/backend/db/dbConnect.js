const mongoshe = require("mongoose");

const connectTodb = () => {
  mongoshe
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Database Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectTodb;
