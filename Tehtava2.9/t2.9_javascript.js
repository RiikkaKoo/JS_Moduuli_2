/* Write a function called even(), which receives an array containing numbers
as a parameter. The function returns a second (usually smaller) array which has
the even numbers of the original array. The function must not make changes to
the original table. (3p)
 */
/* Example: In a three-item array, there are items 2, 7 and 4. The function
returns a two-item array with items 2 and 4.
 */
/* Print both the original array and the new array to the console in the main
program after you have called the function.
 */
/* You can hard code the array, no need for prompt().*/

'use strict';

function even(lista) {
  const parillinen = [];
  for (let n of lista) {
    let jakojaannos = parseInt(n) % 2;
    if (jakojaannos === 0) {
      parillinen.push(n);
    }
  }
  return parillinen;
}

function lue(lista) {
  for (let a of lista) {
    console.log(`${a}`);
  }
}

const luvut = [88, 37, 2, 4, 7, 33, 95, 26, 77, 71, 20, 12, 29, 5];

const lista2 = even(luvut);
console.log('Tässä on alkuperäinen lista: ');
lue(luvut);
console.log('Ja tässä on parilliset luvut listasta: ');
lue(lista2);