/* Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters. Write a main program that rolls
the dice until the result is 6. The main program should print out the result
of each roll in an unordered list (<ul>). (2p)
 */

'use strict';

function nopanheitto() {
  let heitto = Math.floor(Math.random() * 6) + 1;
  document.querySelector('#heitot').innerHTML += `<li>~ ${heitto}</li>`;
  return heitto;
}

let luku = 0;
do {
  luku = nopanheitto();
} while (luku !== 6);

