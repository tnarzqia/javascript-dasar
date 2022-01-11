let array = [1, 2, 3, "halo", false, true];

// Method join() menggabungkan semua element array, kemudian mengubahnya menjadi string
// array.join(penghubung)
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("#"));
console.log(array.join("...."));

// Method toString() akan menggabungkan semua element array dan mengubahnya ke tipe data string dengan penghubung tanda koma ,
console.log(array.toString());
console.log(array.toString("::")); //tidak bisa hanya bisa digunakan dengan mgnggunakan join

// pop(), mengeluarkan element terakhir dari sebuah array.
array.pop();
console.log(array);

// push(), menambah element di bagian akhir dari sebuah array.
array.push("Hai");
console.log(array);

// shift(), mengeluarkan element pertama dari sebuah array.
array.shift();
console.log(array);

// unshift(), menambah element di bagian awal array.
array.unshift("Angka");
console.log(array);


// Menambah, Menghapus, dan Mengganti Element Array dengan splice()
// array.splice(index, jumlah, item1, ..., itemX);
// index menjelaskan posisi di mana element harus ditambah atau dihapus.
// jumlah menentukan jumlah element yang mau dihapus di array.
// item1, ..., itemX merupakan element baru yang mau ditambah ke dalam array.
array.splice( 3, 0, "kucing", "sepakbola", "bermain");
console.log("Arrray Splice ", array);


// Menggabungkan Lebih Dari Satu Array dengan concat()
// array1.concat(array2, array3, ..., arrayX)
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);


// Mengambil Element Array dengan slice()
// Method slice() digunakan untuk mengambil beberapa element pada array, dan menaruhnya pada array baru.
// array.slice(mulai, akhir)
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0,3);
let cemilanManis = cemilan.slice(4);
console.log(cemilanGurih); 
console.log(cemilanManis);


// Mengurutkan Array dengan sort()
// array.sort(fungsiPembanding)
cemilan.sort();
console.log(cemilan);

let bilangan = [30, 1, 3.5, 2, 10, 100];
bilangan.sort();
console.log(bilangan);
// Ini dikarenakan method sort() secara default mengurutkan element array berdasarkan nilai string-nya. 
// Element array dengan angka 100 dianggap lebih kecil dari element array dengan angka 2 
// dikarenakan string "1" di 100 lebih kecil dari string "2" di angka 2
// Nah, untuk mengatasi hal tersebut, 
// kita bisa menggunakan ** compare function** atau fungsi pembanding sebagai parameter di method sort seperti contoh di bawah ini:
let urutDariKecil = function(a,b)
{
    return a - b;
};
let urutDariBesar = function(a,b)
{
    return b - a;
};
console.log(bilangan.sort(urutDariBesar));
console.log(bilangan.sort(urutDariKecil));



// Memutar urutan Array dengan reverse()
// Method reverse() akan mengurutkan element pada array dari index yang terbesar hingga index yang terkecil, bukan nilai yang terbesar hingga yang terkecil.
// array.reverse()
let jenisBuah = ["Jeruk", "Apel", "Mangga", "Jambu"];
jenisBuah.reverse();
console.log(jenisBuah);

