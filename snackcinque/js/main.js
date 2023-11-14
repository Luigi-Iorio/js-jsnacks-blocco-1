"use strict";

// CONSEGNA ESERCIZIO
/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
*/

// richiesta numero di array da creare
const n = parseFloat(prompt("Inserisci un numero"));
let nRandom = 0;
const arrayN = [];

// Creazione 10 numeri casuali da 1 a 100
for (let x = 0; x < 10; x++) {
  nRandom = Math.floor(Math.random() * 100) + 1;
  arrayN.push(nRandom);
  console.log(nRandom);
}

// Creazione numero di array in base al dato inserito dall'utente
for (let i = 0; i < n; i++) {
  const array = arrayN;
  console.log(array);
}
