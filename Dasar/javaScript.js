let nama = "Gavin";
nama = "Rizky";
console.log(nama);

// Template Literal, cara untuk menanamkan ekspresi JavaScript ke dalam sebuah string
// Template literal dibungkus dengan sepasang tanda `(backtick), dan ekspresi JavaScript-nya dibungkus dengan tanda ${ }
// let namaVariabel = `${ekspresiJavaScript}`;
let nama_saya = "sarah";
let umur = 24;
let kalimat = `Nama ${nama_saya} umur ${umur}`;
console.log(kalimat);
// kita pun dapat melakukan operasi logika matematika dengan template literal 
let kalimat2 = `Nama ${nama_saya} umur ${umur + 1 >= 17 ? 'Bisa' : 'tidak bisa'} ikut pemilu`;
console.log(kalimat2);

function namaSaya() {
    return "Krishna";
  }
let perkenalan = `Hallo nama saya adalah ${namaSaya()}`;
console.log(perkenalan);