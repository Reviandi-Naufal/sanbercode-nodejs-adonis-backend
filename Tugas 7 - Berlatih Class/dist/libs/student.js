"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Student = /*#__PURE__*/function () {
  function Student(Name) {
    _classCallCheck(this, Student);

    this._name = Name;
  }

  _createClass(Student, [{
    key: "Name",
    get: function get() {
      return this._name;
    },
    set: function set(inputName) {
      this._name = inputName;
    }
  }]);

  return Student;
}();

var _default = Student;
exports["default"] = _default;