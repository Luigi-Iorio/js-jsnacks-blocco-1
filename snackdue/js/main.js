"use strict";

// richiesta parole all'utente
const parolaUno = prompt("Inserisci la prima parola");
const parolaDue = prompt("Inserisci la seconda parola");

// controllo lunghezza parole
if (parolaUno.length > parolaDue.length) {
  console.log(parolaDue);
  console.log(parolaUno);
} else if (parolaDue.length > parolaUno.length) {
  console.log(parolaUno);
  console.log(parolaDue);
} else {
  console.log("Le parole hanno la stessa lunghezza");
}
