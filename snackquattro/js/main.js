"use strict";

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.

// creazione array vuoto
const numeri = [];
let somma = 0;

do {
  let daInserire = parseFloat(prompt("Inserisci un numero"));
  numeri.push(daInserire);
  somma += numeri;
  console.log(`La somma è ${somma}`);
} while (somma < 50);
