// .map() digunakan untuk melakukan perulangan sambil mengecek/melakukan operasi terhadap setiap elemen array, 
// lalu memberikan nilai balik berupa array baru tanpa mengubah nilai pada array yang lama.
// arr.map((value, index, array) => {
//     // kode program
//   });
let input = [100, 50, 60, 10];
let output = input.map(item => {
    return item/10;
});
console.log(output); // menghasilkan array baru berupa output : [ 10, 5, 6, 1 ]