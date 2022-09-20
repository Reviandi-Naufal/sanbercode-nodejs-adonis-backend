export const sapa = (nama) => {
    return `halo selamat pagi, ${nama}`
}

export const dataDiri = (nama, domisili, umur) => {
    return {
        nama, 
        domisili, 
        umur
    }
}

export const dataSiswa = (namaSiswa, kelas, score) => {
    return {
        namaSiswa, 
        kelas, 
        score
    }
}

const dataKelas = [
    { name: "Ahmad", kelas: "adonis"},
    { name: "Regi", kelas: "laravel"},
    { name: "Bondra", kelas: "adonis"},
    { name: "Iqbal", kelas: "vuejs" },
    { name: "Putri", kelas: "Laravel" }
]

export const filterData = (namaKelas) =>{
    for(let i=0; i < dataKelas.length; i++){
        return dataKelas.filter((el) => el['kelas'].toLowerCase().includes(namaKelas.toLowerCase()));   
    }
}