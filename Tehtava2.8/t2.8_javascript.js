/* Write a function called concat(), which receives an array of strings as a
parameter. The function returns a string formed by concatenating the elements
of the array. (2p)
 */
/* Example: In a four-item array, there are items Johnny, DeeDee, Joey
and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
 */
/* Do not use array.join() function
You can hardcode the array, no need for prompt().
Print the result to HTML document.*/

'use strict';

function concat(lista) {
  let merkkijono = '';
  for (let i of lista) {
    merkkijono += i;
    // console.log(merkkijono);
  }
  return merkkijono;
}

function lue(lista) {
  for (let a of lista) {
    document.querySelector(
        '#asiat').innerHTML += `${a}, `;
  }
}

const tavaroita = ['Kynä', 'Pyyhekumi', 'Avaimet', 'Juomapullo', 'Lompakko'];
lue(tavaroita);
const tulos = concat(tavaroita);
console.log(tulos);
document.querySelector(
    '#jono').innerHTML = `Funktio teki listasta merkkijonon: ${tulos}`;