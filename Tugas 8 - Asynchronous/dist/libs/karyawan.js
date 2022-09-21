"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Karyawan = /*#__PURE__*/function () {
  function Karyawan(name, password, role) {
    _classCallCheck(this, Karyawan);

    this._name = name;
    this._password = password;
    this._role = role;
    this._isLogin = false;

    if (this._role == 'trainer') {
      this._students = [];
    }
  }

  _createClass(Karyawan, [{
    key: "Name",
    get: function get() {
      return this._name;
    },
    set: function set(inputName) {
      this._name = inputName;
    }
  }, {
    key: "Password",
    get: function get() {
      return this._password;
    },
    set: function set(inputPass) {
      this._password = inputPass;
    }
  }, {
    key: "Role",
    get: function get() {
      return this._role;
    },
    set: function set(inputRole) {
      this._role = inputRole;
    }
  }, {
    key: "isLogin",
    get: function get() {
      return this._isLogin;
    },
    set: function set(inputLogin) {
      this._isLogin = inputLogin;
    }
  }]);

  return Karyawan;
}();

var _default = Karyawan;
exports["default"] = _default;