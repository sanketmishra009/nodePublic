const mongoose = require("mongoose");

const blackListedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    defailt: new Date().toISOString(),
    expires: 3600,
  },
});

const blackListedTokenModel = mongoose.model(
  "BlackListedTokens",
  blackListedTokenSchema
);

module.exports = blackListedTokenModel;
