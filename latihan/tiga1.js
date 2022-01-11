function kotak(panjang) {
    let hasil = 0;
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= panjang; j++) {
            hasil += (i+j);
        }
        hasil += i;
    }
    return hasil;
}
console.log(kotak(25));