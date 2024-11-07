/* Modify the function above so that it gets the number of sides on the dice
as a parameter. With the modified function you can for example roll a 21-sided
role-playing dice. The difference to the last exercise is that the dice rolling
in the main program continues until the program gets the maximum number on the
dice, which is asked from the user at the beginning. (2p)
 */

'use strict';

function nopanheitto(max) {
  let heitto = Math.floor(Math.random() * (max - 1 + 1)) + 1;
  document.querySelector('#heitot2').innerHTML += `<li>~ ${heitto}</li>`;
  return heitto;
}

const sivut = prompt('Anna nopan suurin silmäluku: ');
const nopansivut = parseInt(sivut);

let luku = 0;
do {
  luku = nopanheitto(nopansivut);
  console.log(luku);
} while (luku !== nopansivut);