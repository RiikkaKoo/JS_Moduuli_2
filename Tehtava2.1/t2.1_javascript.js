/* Write a program that prompts the user for five numbers and prints them in
the reverse order they were entered. Print the result to the console.(2p)

Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function. */

const numerot = [];

let pyydetty = 0;
while (pyydetty < 5) {
  let num = prompt('Anna numero: ');
  numerot.push(num);
  pyydetty++;
}

let indeksit = numerot.length - 1;
// console.log(numerot);
// console.log(indeksit);

console.log('Tässä on syötetyt numerot käänteisjärjestyksessä: ');
for (let n = indeksit; n >= 0; n--) {
  console.log(numerot[n]);
}

