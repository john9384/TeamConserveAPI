const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../../config");

// let dbConnection = mongoose.createConnection(`${config.dbURI}BOX_MERCHANTS`);
mongoose.Promise = global.Promise;

const newsLetterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  },
  { collection: "newsletter" }
);

const Newsletter = mongoose.model("newsletter", newsLetterSchema);

module.exports = Newsletter;
