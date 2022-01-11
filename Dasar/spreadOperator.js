// Spread Operator, Berlawanan dengan rest parameter, sifat dari spread operator justru memisahkan/memecahkan
// Ia memecah sebuah array menjadi element-elementnya (atau dalam kasus objek, memecah objek menjadi pasangan properti-nilai yang membentuknya)
let arrayBilangan = [1, 2, 3, 4, 5];
// tanpa spread operator
console.log(arrayBilangan); // Output: [1, 2, 3, 4, 5]
// dengan spread operator
console.log(...arrayBilangan); // Output: 1, 2, 3, 4, 5

// Spread Operator Dengan Objek
let orang = {
    nama: "Yudistya",
    umur: 32
  };
orang = {
      ...orang, pekerjaan: "arsitek", pendidikan:"S1"
  }
console.log(orang);

// menggabungkan objek, dnegan  Spread Operator
// jika tanpa spread operator, kita harus menggunakan method .assign() dari Object seperti ini:
const objek1 = {a: 1, b: 2};
const objek2 = {c: 3, d: 4};
const objekGabung = Object.assign({}, objek1, objek2);
console.log(objekGabung);
// menggunakan spread operator
let gabungObjek = {...objek1, ...objek2};
console.log(gabungObjek);


let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah = {...namaBuah1, ...namaBuah2};
console.log(namaBuah1, namaBuah2);
console.log(semuaNamaBuah);


