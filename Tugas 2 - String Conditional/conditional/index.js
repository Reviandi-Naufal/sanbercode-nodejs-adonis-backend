// Soal if-else
console.log("Soal If-Else")
console.log(" ")

var nama = "Jane"
var peran = "Penyihir"

if (nama == "" && peran == ""){
    console.log("Nama harus diisi!")
} else if (nama == "John" && peran == "") {
    console.log("Halo John, Pilih peranmu untuk memulai game!")
} else if (nama == "Jane" && peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, Jane")
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
} else if (nama == "Jenita" && peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, Jenita")
    console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
} else if (nama == "Junaedi" && peran == "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, Junaedi")
    console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!" )
}

// Soal Switch Case
console.log("Soal Switch Case")
console.log(" ")

var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2000; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch(bulan) {
case 1 :   { console.log(tanggal + " " + "Januari" + " " + tahun); break; }
case 2 :   { console.log(tanggal + " " + "Februari" + " " + tahun); break; }
case 3 :   { console.log(tanggal + " " + "Maret" + " " + tahun); break; }
case 4 :   { console.log(tanggal + " " + "April" + " " + tahun); break; }
case 5 :   { console.log(tanggal + " " + "Mei" + " " + tahun); break; }
case 6 :   { console.log(tanggal + " " + "Juni" + " " + tahun); break; }
case 7 :   { console.log(tanggal + " " + "Juli" + " " + tahun); break; }
case 8 :   { console.log(tanggal + " " + "Agustus" + " " + tahun); break; }
case 9 :   { console.log(tanggal + " " + "September" + " " + tahun); break; }
case 10 :  { console.log(tanggal + " " + "Oktober" + " " + tahun); break; }
case 11 :  { console.log(tanggal + " " + "November" + " " + tahun); break; }
case 12 :  { console.log(tanggal + " " + "Desember" + " " + tahun); break; }
default :  { console.log("Mohon Isi tanggal, bulan, dan tahun dengan lengkap"); }
}