//Kullanıcıdan alınan sayının faktoriyelini alan program
let factorial = Number(prompt("Enter a number"));
let result = 1;
for (let i = 1; i <= factorial; i++) {
  result = result * i;
}
// console.log(factorial + "'s factoriel is " + result);
