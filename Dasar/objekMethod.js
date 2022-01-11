// let objek = {
//     namaProperti1: nilaiProperti1,
//     namaProperti2: function() {...} // nilai dari namaProperti2 adalah method dari variabel objek
//  };

let kalkulator = {
    namaOperasi : "penjumlahan",
    jumlah : function(angka1, angka2) {
        return angka1 + angka2;
    }
};

console.log(kalkulator);
console.log(kalkulator.jumlah(2,4));


const user = {
    nama : "Tina",
    umur: 23,
    makananFaforit: "Jamur tumis",
    perkenalkanDiri: () => {
        return `Nama Saya ${this.nama} . Saya umur ${this.umur} . Saya suka makan ${this.makananFaforit}`;
    }
};

// console.log(user.perkenalkanDiri());

function fungsiA()
{
    console.log(user.perkenalkanDiri());
}