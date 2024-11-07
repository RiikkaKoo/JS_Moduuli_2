/* Write a program that asks the user for numbers until he gives zero.
The given numbers are printed in the console from the largest to the smallest.
 */
'use strict'

const luvut = [];
let numero = prompt('Syötä numero. Kun haluat lopettaa, syötä numero "0": ');

while (parseFloat(numero) !== 0) {
  luvut.push(parseFloat(numero));
  numero = prompt('Syötä numero. Kun haluat lopettaa, syötä numero "0": ');
}

// console.log(luvut);
luvut.sort((a, b) => a - b);
// console.log('luvut järjestyksessä ' + luvut)
console.log("Tulostetaan luvut suurimmasta pienimpään: ")

for (let l = luvut.length - 1; l >= 0; l--) {
  console.log(luvut[l]);
}