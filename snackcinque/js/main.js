"use strict";

// CONSEGNA ESERCIZIO
/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
*/

const n = parseFloat(prompt("Inserisci un numero"));
let nRandom = 0;

for (let x = 0; x < 10; x++) {
  nRandom = Math.floor(Math.random() * 100) + 1;
  console.log(nRandom);
}

for (let i = 0; i < n; i++) {
  const array = [];
  array.push(nRandom);
  console.log(array);
}
