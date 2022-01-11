// Rest Parameter, parameter yang mewakili nilai dari semua (atau sisa) argument yang diberikan kepada suatu fungsi.
// Rest parameter harus ada ... (titik 3) di parameter
const foo = (...parameter) => {
    console.log(parameter[0]);
    console.log(parameter);
};
foo("a", "b", "c");


// Rest Parameter Sebagai Parameter Terakhir
// digunakan saat ada parameter lain pada fungsi yang sama
// Dalam kasus ini, rest parameter akan mewakili sisa argument yang belum "dipetakan" ke parameter-parameter sebelumnya.
const baru = (param1, param2, param3, ...params) => {
    console.log("Argumen Pertama", param1);
    console.log("Argumen Kedua", param2);
    console.log("Argumen Ketiga", param3);
    console.log("Argumen Sisa", params);
}
baru("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L");