// .forEach() digunakan untuk melakukan iterasi dalam mengakses elemen array dengan 3 parameter
// array.forEach((value, index, array) => {
//     // kode program
//     })
// value yaitu isi dari tiap elemen yang diproses.
// index (optional) yaitu nomor index tiap elemen.
// array (optional) yaitu array itu sendiri.

let warna = ["kuning", "biru", "merah", "ungu"];
warna.forEach( data => {
    console.log(data);
});

warna.forEach((item, idx) => {
    if(idx%2 === 0){
        console.log(item, idx);
    }
    else{
        console.log("Tidak tersedia", idx);
    }
});