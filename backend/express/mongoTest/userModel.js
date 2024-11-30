const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1/users`);

const userSchema = mongoose.Schema({
  user: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
