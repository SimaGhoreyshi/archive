const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
    },

    password: {
      type: String,
      required: true,
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

    registerDate: {
      type: Date,
      required: true,
    },

    profilePic: {
      type: String,
    },
    // profilePicType: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

// usersSchema.virtual("profilePicPath").get(function () {
//   if (this.profilePic != null && this.profilePicType != null) {
//     return `data:${
//       this.profilePicType
//     };charset=utf-8;base64,${this.profilePic.toString("base64")}`;
//   }
// });

const User = mongoose.model("User", usersSchema);
module.exports = User;
