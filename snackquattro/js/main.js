"use strict";

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.

// creazione array vuoto
let numeri = [];

let somma = 0;

let i = 0;

do {
  let daInserire = +prompt("Inserisci un numero");
  numeri.push(daInserire[i]);
  somma += numeri[i];
  console.log(somma);
} while (somma < 50);
console.log("la somma è maggiore / uguale a 50");
