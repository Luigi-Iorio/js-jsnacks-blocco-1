// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

"use strict";
let numero = 0;
let somma = 0;

for (let i = 0; i < 10; i++) {
  numero = parseFloat(prompt("inserisci un numero"));
  somma += numero;
}

console.log(`La somma è ${somma}`);
