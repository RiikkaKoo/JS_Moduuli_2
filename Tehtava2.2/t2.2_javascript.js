/* Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants. Finally,
the program prints the names of the participants on the web page in an ordered
list (<ol>) in alphabetical order. (2p)
 */

const osallistuu = prompt('Anna osallistujien lukumäärä: ');
const osallistujat = [];
let annetut = 0;

while (annetut < osallistuu) {
  let nimi = prompt('Anna osallistujan nimi: ');
  osallistujat.push(nimi);
  annetut++;
}
console.log(osallistujat);
osallistujat.sort();

for (let o = 0; o <= osallistujat.length - 1; o++) {
  console.log(osallistujat[o]);
  document.querySelector('#lista').innerHTML += `<li>${osallistujat[o]}</li>`
  }