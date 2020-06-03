const router = require("express").Router();
let User = require("../models/user.model");

//GET
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by id
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST
router.route("/add").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const registerDate = Date(req.body.date);

  const newUser = new User({
    email,
    password,
    firstName,
    lastName,
    registerDate,
  });
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

//UPDTE
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id).then((user) => {
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = req.body.password;

    user
      .save()
      .then(() => res.json("User updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

router.route("/:id").put((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then(() => res.json("User updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
