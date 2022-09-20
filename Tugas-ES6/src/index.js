import {sapa, dataDiri, dataSiswa, filterData} from './libs/soal'

const myArgs = process.argv.slice(2);
const command = myArgs[0];

switch(command){
    case 'sapa':
        let nama = myArgs[1]
        console.log(sapa(nama))
        break;
    case 'convert':
        const params = myArgs.slice(1)

        let [name, domisili, umur] = params
        console.log(dataDiri(name, domisili, umur))

        break;
    case 'checkScore':
        const check = myArgs[1]

        const split_string = check.split(",") // [name:Ahmad, kelas:Adonis, score:89]
        let split_data = []
        for (var i=0; i < split_string.length; i++){
            let data = split_string[i].split(":")
            split_data.push(data[1])
        }

        let [namaSiswa, kelas, nilai] = split_data
        console.log(dataSiswa(namaSiswa, kelas, nilai))

        break;
    case 'filterData ':
        let namaKelas = myArgs[1]
        console.log(filterData(namaKelas));

        break;
    default:
        break;
}
