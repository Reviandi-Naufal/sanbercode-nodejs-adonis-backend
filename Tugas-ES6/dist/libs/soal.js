"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sapa = exports.filterData = exports.dataSiswa = exports.dataDiri = void 0;

var sapa = function sapa(nama) {
  return "halo selamat pagi, ".concat(nama);
};

exports.sapa = sapa;

var dataDiri = function dataDiri(nama, domisili, umur) {
  return {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
};

exports.dataDiri = dataDiri;

var dataSiswa = function dataSiswa(namaSiswa, kelas, score) {
  return {
    namaSiswa: namaSiswa,
    kelas: kelas,
    score: score
  };
};

exports.dataSiswa = dataSiswa;
var dataKelas = [{
  name: "Ahmad",
  kelas: "adonis"
}, {
  name: "Regi",
  kelas: "laravel"
}, {
  name: "Bondra",
  kelas: "adonis"
}, {
  name: "Iqbal",
  kelas: "vuejs"
}, {
  name: "Putri",
  kelas: "Laravel"
}];

var filterData = function filterData(namaKelas) {
  for (var i = 0; i < dataKelas.length; i++) {
    return dataKelas.filter(function (el) {
      return el['kelas'].toLowerCase().includes(namaKelas.toLowerCase());
    });
  }
};

exports.filterData = filterData;