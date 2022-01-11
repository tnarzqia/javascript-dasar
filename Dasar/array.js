const human = {
    name: 'sarah',
    job: 'teacher',
    age: 24
  };

console.log(human.name);
console.log(human["name"]);

const orang = {
    nama : 'Tina',
    job: 'Programmer',
    age: 24
}
orang.kebangsaan = "Indonesia";
orang['hobby'] = "codding";

console.log(orang);

delete orang.kebangsaan;
delete orang["hobby"];

console.log(orang);