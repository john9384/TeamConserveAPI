const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../../config");

// let dbConnection = mongoose.createConnection(`${config.dbURI}BOX_MERCHANTS`);
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    title: {
      type: String,
      trim: true
    },
    detail: {
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
  { collection: "feedback" }
);

const Feedback = mongoose.model("feedback", userSchema);

module.exports = Feedback;
