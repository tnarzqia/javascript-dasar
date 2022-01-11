// objek, yaitu suatu variabel yang dapat memiliki properti dan nilai. 
// Adapun nilai dari sebuah properti di objek bisa berupa fungsi yang disebut sebagai method.
// let objek = {
//     namaProperti1: nilaiProperti1,
//     namaProperti2: function() {...} // namaProperti2 adalah method dari variabel objek
//  };

// Objek Math hanya bisa digunakan untuk tipe data number, dan tidak bisa digunakan untuk tipe data BigInt.
let result = Math.sqrt(9); // Output: 3

// let result = Math.sqrt(BigInt(9)); // Output: TypeError: Cannot convert a BigInt value to a number

// Ada 8 properti objek Math, yaitu:
// Math.E               // Bilangan Euler
// Math.LN2             // Log 2 
// Math.LN10            // Log 10
// Math.LOG2E           // Log E di Basis 2
// Math.LOG10E          // Log E di Basis 10
// Math.PI              // Pi
// Math.SQRT1_2         // Akar Kuadrat dari 0.5
// Math.SQRT2           // Akar Kuadrat dari 2

let r = 10;
let luasLingkaran = Math.PI * (r ** 2);

console.log(luasLingkaran); 

// Math.abs(x), Digunakan untuk mengubah angka x yang bernilai negatif menjadi positif.
let bilangan = -70.5;
console.log(Math.abs(bilangan));

// Math.pow(x, y) , Digunakan untuk menghitung hasil dari x pangkat y
let bilangan1 = 6;
let pangkat = 2;
console.log(Math.pow(bilangan1, pangkat));

// Math.sqrt(x) , Digunakan untuk menghitung akar kuadrat dari x.
let bilangan2 = 64;
console.log(Math.sqrt(bilangan2));

// Math.cbrt(x) , Digunakan untuk menghitung akar pangkat 3 dari x.
let bilangan3 = 8;
console.log(Math.cbrt(bilangan3));

// Math.round(x) , Digunakan untuk membulatkan angka desimal x menjadi bilangan bulat.
let bilangan4 = 5.7;
let bilangan5 = 5.4;
console.log(Math.round(bilangan4)); // Output: 6
console.log(Math.round(bilangan5)); 

// Math.floor(x) , Digunakan untuk membulatkan angka desimal x ke bawah.
let bilangan7 = 5.7;
let bilangan8 = 5.4;
console.log(Math.floor(bilangan7)); // Output: 5
console.log(Math.round(bilangan8)); // Output: 5


// Math.ceil(x) , Digunakan untuk membulatkan angka desimal x ke atas.
let bilangan_1 = 5.7;
let bilangan_2 = 5.4;
console.log(Math.ceil(bilangan_1)); // Output: 6
console.log(Math.ceil(bilangan_2)); // Output: 6

// Math.random() , Digunakan untuk menampilkan angka secara acak antara 0 hingga 1 (0 termasuk. 1 tidak).
console.log(Math.random()); // Output: 0.14087695004117018
console.log(Math.random()); // Output: 0.17923176966306498

// Math.max(x, y, z, ..., n) , Digunakan untuk mencari angka terbesar di antara parameter x, y, z, ..., n.
console.log(Math.max(1, 4, 6, 7)); // Output: 7

// Math.min(x, y, z, ..., n) , Digunakan untuk mencari angka terkecil di antara parameter x, y, z, ..., n.
console.log(Math.min(1, 4, 6, 7)); // Output: 1