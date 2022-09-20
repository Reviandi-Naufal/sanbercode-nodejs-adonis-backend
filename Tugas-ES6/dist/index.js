"use strict";

var _soal = require("./libs/soal");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var myArgs = process.argv.slice(2);
var command = myArgs[0];

switch (command) {
  case 'sapa':
    var nama = myArgs[1];
    console.log((0, _soal.sapa)(nama));
    break;

  case 'convert':
    var params = myArgs.slice(1);

    var _params = _slicedToArray(params, 3),
        name = _params[0],
        domisili = _params[1],
        umur = _params[2];

    console.log((0, _soal.dataDiri)(name, domisili, umur));
    break;

  case 'checkScore':
    var check = myArgs[1];
    var split_string = check.split(","); // [name:Ahmad, kelas:Adonis, score:89]

    var split_data = [];

    for (var i = 0; i < split_string.length; i++) {
      var data = split_string[i].split(":");
      split_data.push(data[1]);
    }

    var namaSiswa = split_data[0],
        kelas = split_data[1],
        nilai = split_data[2];
    console.log((0, _soal.dataSiswa)(namaSiswa, kelas, nilai));
    break;

  case 'filterData ':
    var namaKelas = myArgs[1];
    console.log((0, _soal.filterData)(namaKelas));
    break;

  default:
    break;
}