/* Write a program that asks for the names of six dogs. The program prints
dog names to unordered list <ul> in reverse alphabetical order. (2p)
 */

const koirat = [];
let kerrat = 6;

function kysy_nimet(toista) {
  let numero = 1;
  for (let n = 1; n <= toista; n++) {
    let nimi = prompt(`Anna koiran nimi (${numero}/6): `);
    koirat.push(nimi);
    numero++;
  }
}

kysy_nimet(kerrat);
// console.log(koirat);
koirat.sort();

for (let k = koirat.length - 1; k >= 0; k--) {
  // console.log(koirat[k]);
  document.querySelector('#koiralista').innerHTML += `<li>${koirat[k]}</li>`;
}