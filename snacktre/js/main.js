// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

"use strict";
let numero = 0;
let somma = 0;

for (let i = 0; i < 10; i++) {
  // richiesta numero all'utente per 10 volte
  numero = parseFloat(prompt("inserisci un numero"));
  // stampa in console dei numeri inseriti
  console.log(`Il ${i + 1}ˆ numero inserito è ${numero}`);
  // calcolo somma
  somma += numero;
}

// stampa della somma in console
console.log(`La somma è ${somma}`);
