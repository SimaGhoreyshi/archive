const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sectionsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    managerName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },

    registerDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.model("Section", sectionsSchema);
module.exports = Section;
