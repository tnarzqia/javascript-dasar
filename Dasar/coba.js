let makanan = ["Nasi", "Ayam", "Pisang"];
makanan.map(item => {
console.log(item)
});

makanan.map(item => {
  console.log(item + " Goreng")
});

let gorengMakanan = makanan.map((item) => {
  return item + " Goreng";
});
console.log(gorengMakanan)