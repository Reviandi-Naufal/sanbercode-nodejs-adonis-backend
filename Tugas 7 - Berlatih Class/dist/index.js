"use strict";

var _bootcamp = _interopRequireDefault(require("./libs/bootcamp"));

var _student = _interopRequireDefault(require("./libs/student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanber = new _bootcamp["default"]("sanbercode");
sanber.createClass("Laravel", "beginner", "abduh");
sanber.createClass("React", "beginner", "abdul");
console.log("Release 0");
console.log(" ");
console.log(sanber.classes);
console.log("======================================");
var names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map(function (nama, index) {
  var newStud = new _student["default"](nama);
  var kelas = sanber.classes[index % 2].NameClass;
  sanber.register(kelas, newStud);
}); // menampilkan data kelas dan student nya

console.log("Release 1");
console.log(" ");
sanber.classes.forEach(function (kelas) {
  console.log(kelas);
});