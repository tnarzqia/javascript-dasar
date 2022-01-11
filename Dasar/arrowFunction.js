// Arrow function
// const namaFungsi = (parameter1, ..., parameterX) => {
    // kode yang ingin dijalankan dalam fungsi
//   };

// atau bila fungsi tersebut tidak memiliki parameter sama sekali
// const namaFungsiTanpaParameter = () => {
    // kode yang ingin dijalankan dalam fungsi
// };

// fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil = bilangan1 + bilangan2;
    return hasil;
};
console.log(operasiPenjumlahan(2,4));

// fungsi yang tidak memiliki parameter
const namaHewan = () => {
    const anjing = ["pug", "bulldog", "poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
};
console.log(namaHewan());



// Implicit Return Value
// suatu kondisi di mana sebuah fungsi langsung mengembalikan nilai tanpa ada deklarasi variabel atau operasi lainnya di dalamnya.
function greeting(nama)
{
    return `Hi ${nama}`;
}
console.log(greeting("Tomi"));
// Kode di atas bisa disingkat dengan menggunakan arrow function sebagai berikut:
const greetings = (nama) => `Hi ${nama}`;
console.log(greetings('Einstein')); // Output: Hi Einstein
// Untuk fungsi yang tidak memiliki parameter, syntax arrow function untuk implicit return value adalah sebagai berikut:
// const namaFungsi = () => nilaiReturn;

