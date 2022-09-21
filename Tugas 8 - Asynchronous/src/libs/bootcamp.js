import Karyawan from "./karyawan";
import fs from "fs";
import fsPromises from "fs/promises";

const path = "data.json";

class Bootcamp{
    static register(input){
        let [name, password, role] = input.split(",");
        fs.readFile(path, (error, data) => {
            if(error){
                console.log(error);
            }

            let existingData = JSON.parse(data);
            let karyawan = new Karyawan(name, password, role);
            existingData.push(karyawan);
            fs.writeFile(path, JSON.stringify(existingData), (error) => {
                if(error){
                    console.log(error);
                }else{
                    console.log("Berhasil registrasi")
                }
            });
        });
    }

    static login(input){
        let[name, password] = input.split(",");
        
        fsPromises
        .readFile(path)
        .then((data) => {
            let employees = JSON.parse(data);
            
            let idxEmployee = employees.findIndex((emp) => emp._name == name);

            if(idxEmployee == -1){
                console.log("data karyawan tidak ditemukan");
            }else{
                let employee = employees[idxEmployee];

                if(employee._password == password){
                    employee._isLogin = true;

                    employees.splice(idxEmployee, 1, employee);
                    console.log("Berhasil login");
                    return fsPromises.writeFile(path, JSON.stringify(employees)); 
                }else{
                    console.log("Password yang dimasukan salah");
                }
            }
        })
        .catch((err) => {
            console.log(err)
        });
    }

    static addSiswa = async (input) => {
        let [name, trainer_name] = input.split(",");
        const student = {name}

        let dataRead = await fsPromises.readFile(path);
        let employees = JSON.parse(dataRead);
        let idxAdmin = employees.findIndex((emp) => emp._role == 'admin');

        if(employees[idxAdmin]._isLogin == false){
            console.log("Silahkan admin login terlebih dahulu");
        }else{
            let idxTrainer = employees.findIndex((emp) => emp._name == trainer_name);
            let trainerPointed = employees[idxTrainer];
            trainerPointed._students.push(student);
            employees.splice(idxTrainer, 1, trainerPointed);
            await fsPromises.writeFile(path, JSON.stringify(employees));
            console.log("Berhasil add siswa");
        }
    }
}

export default Bootcamp;