"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _kelas = _interopRequireDefault(require("./kelas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Bootcamp = /*#__PURE__*/function () {
  function Bootcamp(Name) {
    _classCallCheck(this, Bootcamp);

    this._name = Name;
    this._classes = [];
  }

  _createClass(Bootcamp, [{
    key: "Name",
    get: function get() {
      return this._name;
    },
    set: function set(Name) {
      this._name = Name;
    }
  }, {
    key: "classes",
    get: function get() {
      return this._classes;
    }
  }, {
    key: "createClass",
    value: function createClass(NameClass, level, instructor) {
      var newClass = new _kelas["default"](NameClass, level, instructor);

      this._classes.push(newClass);
    }
  }, {
    key: "register",
    value: function register(kelas, newStud) {
      var findClass = this._classes.find(function (clas) {
        return clas.NameClass == kelas;
      });

      findClass.addStudent(newStud);
    }
  }]);

  return Bootcamp;
}();

var _default = Bootcamp;
exports["default"] = _default;