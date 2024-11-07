/* Write a program that prompts the user for numbers. When the user enters
one of the numbers he previously entered, the program will announce that the
number has already been given and stops its operation and then prints all the
given numbers to the console in ascending order. (2p)
 */

const numerot = [];
let jatka = true;

do {
  let numero = prompt('Anna numero: ');
  let float_nro = parseFloat(numero);
  let tarkista = numerot.includes(float_nro);
  if (tarkista === false) {
    numerot.push(float_nro);
    jatka = true;
  } else if (tarkista === true) {
    console.log(
        `Numero ${float_nro} on jo syötetty kerran. Pysäytetään ohjelma...`);
    jatka = false;
  }
} while (jatka === true);

// console.log(numerot);
numerot.sort((a, b) => a - b);

console.log('Tulostetaan kaikki listan luvut pienimmästä suurimpaan: ');
for (let n = 0; n < numerot.length; n++) {
  console.log(numerot[n]);
}