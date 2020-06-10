const router = require("express").Router();
let Student = require("../models/student-model");

//GET
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by id
router.route("/details/:id").get((req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST
router.route("/add").post((req, res) => {
  const studentNumber = Number(req.body.studentNumber);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = Number(req.body.phoneNumber);
  const enteringYear = Number(req.body.enteringYear);
  const graduationYear = Number(req.body.graduationYear);
  const college = req.body.college;
  const field = req.body.field;
  const fund = req.body.fund;
  const quota = req.body.quota;
  const grade = req.body.grade;
  const nationalCode = Number(req.body.nationalCode);
  const dateOfBirth = Number(req.body.dateOfBirth);
  const birthCertificate = Number(req.body.birthCertificate);
  const lastEditDate = Date(req.body.lastEditDate);
  const lastSamaUpdateDate = Date(req.body.lastSamaUpdateDate);

  const newStudent = new Student({
    studentNumber,
    firstName,
    lastName,
    phoneNumber,
    enteringYear,
    graduationYear,
    college,
    fund,
    quota,
    grade,
    nationalCode,
    dateOfBirth,
    lastEditDate,
    lastSamaUpdateDate,
  });
  newStudent
    .save()
    .then(() => res.json("student added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE
router.route("/edit/:id").post((req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      const studentNumber = Number(req.body.studentNumber);
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const phoneNumber = Number(req.body.phoneNumber);
      const enteringYear = Number(req.body.enteringYear);
      const college = req.body.college;
      const grade = req.body.grade;
      const nationalCode = Number(req.body.nationalCode);
      const dateOfBirth = Number(req.body.dateOfBirth);
      const lastEditDate = Date(req.body.lastEditDate);
      const lastSamaUpdateDate = Date(req.body.lastSamaUpdateDate);

      console.log(student);

      student
        .save()
        .then(() => res.json("student updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
