'use strict';

function listaa(lista) {
  let jono = '';
  for (let j of lista) {
    jono += `  ${j.nimi}  `;
  }
  return jono;
}

function aanesta(kerrat, ehdokkaat) {
  let toistot = 0;
  do {
    let aani = prompt(`Ketä haluat äänestää?` + listaa(osallistujat));
    for (let o of ehdokkaat) {
      if (o.nimi === aani) {
        o.äänet += 1;
      }
    }
    toistot++;
  } while (toistot < kerrat);
}

function tilanne(lista) {
  for (let i of lista) {
    console.log(`${i.nimi} : ${i.äänet}`);
  }
}

const osallistujat = [];

const lukumaara = prompt('Kuinka monta ehdokasta äänestyksessä on? ');
const lkm = parseInt(lukumaara);

let nimetty = 1;
do {
  let nimi = prompt(`Anna ehdokkaan nro ${nimetty} nimi: `);
  osallistujat.push({'nimi': nimi, 'äänet': 0});
  nimetty++;
} while (nimetty <= lkm);

// console.log(osallistujat);

const aanestajat = prompt(
    'Kuinka monta äänestäjää äänestykseen osallistuu? ');

aanesta(parseInt(aanestajat), osallistujat);
// console.log(osallistujat);

let tulokset = osallistujat.sort((a, b) => {
  console.log(a.äänet, b.äänet);
  return b.äänet - a.äänet;
});

// console.log(tulokset);
console.log(`Voittaja on ehdokas ${tulokset[0].nimi}, ${tulokset[0].äänet} äänellä.`);
console.log('Tulokset: ');
tilanne(tulokset);

