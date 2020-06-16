const router = require("express").Router();
let User = require("../models/user-model");
const path = require("path");
const multer = require("multer");
const imageMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
//const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().substring(0, 10) + file.originalname);
  },
});

fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }

  cb();
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
  fileFilter: fileFilter,
});

//GET
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by id
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST
router.route("/add").post(upload.single("profilePic"), async (req, res) => {
  console.log(req.file);

  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = Number(req.body.phoneNumber);
  const role = Boolean(req.body.role);
  const registerDate = Date(req.body.date);
  const profilePic = req.file.path;

  const newUser = new User({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    role,
    registerDate,
    profilePic,
    // profilPic,
  });

  // saveProfilePic(newUser, req.body.profilePic);

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Delete
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE
router.route("/edit/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.email = req.body.email;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.phoneNumber = Number(req.body.phoneNumber);
      user.role = Boolean(req.body.role);

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// function saveProfilePic(newUser, profilePic) {
//   console.log(profilPic);

//   if (profilePic === null) return;
//   const profilePicture = JSON.parse(profilePic);
//   if (profilePicture !== null && imageMimeTypes.includes(profilePic.type)) {
//     newUser.profilePic = new Buffer.from(profilePic.data, "base64");
//     newUser.profilePicType = profilePic.type;
//   }
// }

module.exports = router;
