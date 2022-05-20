// var array = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(array.length-1);

// var resultado = 8 % 4;
// console.log(resultado);

// let string = 'Ser ou não tryber';
// let splitString = string.split('');
// console.log(splitString);

let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let string = 'Matheus';
let lista = [];
for (let index = 0; index < array.length; index += 1) {
  lista[index] = { tech: array[index], name: string };
}
console.table(lista);
