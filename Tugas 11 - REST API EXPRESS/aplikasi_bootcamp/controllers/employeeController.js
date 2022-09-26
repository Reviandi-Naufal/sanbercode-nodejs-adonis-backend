const fs = require("fs");

const path = "data.json";

class employeeController {
  static register(req, res) {
    // res.status(200).json({ message: "testing" });
    fs.readFile(path, (err, data) => {
      if (err) {
        res.status(400).json({
          error: "error, data tidak ditemukan",
        });
      } else {
        let existingData = JSON.parse(data);

        let { users } = existingData;
        let { name, password, role } = req.body;
        let newEmployee = { name, password, role, isLogin: false };

        users.push(newEmployee);

        let newData = { ...existingData, users };

        fs.writeFile(path, JSON.stringify(newData), (err) => {
          if (err) {
            res
              .status(400)
              .json({ error: "error, gagal menyimpan data karyawan" });
          } else {
            res.status(201).json({ message: "Berhasil registrasi" });
          }
        });
      }
    });
  }

  static getKaryawan(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        res.status(400).json({
          error: "error, data tidak ditemukan",
        });
      } else {
        let existingData = JSON.parse(data);
        let { users } = existingData;
        res.status(200).json({
          message: "Berhasil get karyawan",
          data: users,
        });
      }
    });
  }

  static login(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        res.status(400).json({
          error: "error, data tidak ditemukan",
        });
      } else {
        let existingData = JSON.parse(data);
        let { users } = existingData;
        let { name, password } = req.body;
        let idxEmployee = users.findIndex((emp) => emp.name == name);

        if (idxEmployee == -1) {
          res
            .status(400)
            .json({ error: "error, data karyawan tidak ditemukan" });
        } else {
          let employee = users[idxEmployee];

          if (employee.password == password) {
            employee.isLogin = true;

            users.splice(idxEmployee, 1, employee);

            let newData = { users };

            fs.writeFile(path, JSON.stringify(newData), (err) => {
              if (err) {
                res
                  .status(400)
                  .json({ error: "error, gagal menyimpan data karyawan" });
              } else {
                res.status(200).json({
                  message: "Berhasil login",
                });
              }
            });
          } else {
            res.status(400).json({
              error: "Password yang dimasukan salah",
            });
          }
        }
      }
    });
  }

  static addSiswa(req, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        res.status(400).json({
          error: "error, data tidak ditemukan",
        });
      } else {
        let existingData = JSON.parse(data);
        let { users } = existingData;
        let idxAdmin = users.findIndex((emp) => emp.role == "admin");

        if (users[idxAdmin].isLogin == false) {
          res.status(400).json({
            error: "Silahkan admin login terlebih dahulu",
          });
        } else {
          let trainer_data = req.url;
          let { name, class_student } = req.body;
          let trainer_data_parse = trainer_data.split("/");
          let trainer_name = trainer_data_parse[2];
          let idxTrainer = users.findIndex((emp) => emp.name == trainer_name);
          let trainerPointed = users[idxTrainer];
          trainerPointed["students"] = [{ name: name, class: class_student }];
          users.splice(idxTrainer, 1, trainerPointed);
          fs.writeFile(path, JSON.stringify(users), (err) => {
            if (err) {
              res
                .status(400)
                .json({ error: "error, gagal menyimpan data siswa" });
            } else {
              res.status(201).json({
                message: "Berhasil add siswa",
              });
            }
          });
        }
      }
    });
  }
}

module.exports = employeeController;
