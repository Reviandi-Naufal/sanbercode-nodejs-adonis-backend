var express = require("express");
var router = express.Router();

const UserController = require("../controllers/employeeController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", UserController.register);

router.get("/karyawan", UserController.getKaryawan);

router.post("/login", UserController.login);

router.post("/karyawan/:name/siswa", UserController.addSiswa);

module.exports = router;
