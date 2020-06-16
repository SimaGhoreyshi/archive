const router = require("express").Router();
let Section = require("../models/section-model");

//GET
router.route("/").get((req, res) => {
  Section.find()
    .then((sections) => res.json(sections))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by id
router.route("/:id").get((req, res) => {
  Section.findById(req.params.id)
    .then((section) => res.json(section))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const managerName = req.body.managerName;
  const phoneNumber = Number(req.body.phoneNumber);
  const registerDate = Date(req.body.registerDate);

  const newSection = new Section({
    title,
    managerName,
    phoneNumber,
    registerDate,
  });
  newSection
    .save()
    .then(() => res.json("Section added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE
router.route("/edit/:id").post((req, res) => {
  Section.findById(req.params.id)
    .then((section) => {
      section.title = req.body.title;
      section.managerName = req.body.managerName;
      section.phoneNumber = Number(req.body.phoneNumber);

      section
        .save()
        .then(() => res.json("Section updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
