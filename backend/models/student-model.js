const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentsSchema = new Schema(
  {
    studentNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },

    enteringYear: {
      type: Number,
      required: true,
    },

    college: {
      type: String,
      required: true,
    },

    grade: {
      type: String,
      required: true,
    },

    nationalCode: {
      type: Number,
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    lastEditDate: {
      type: Date,
      required: true,
    },

    lastSamaUpdateDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentsSchema);
module.exports = Student;
