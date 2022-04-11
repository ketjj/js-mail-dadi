

// console.log('Hi');

// Mail
// Chiedi all’utente la sua email,

const insertMail = prompt('Inserisci la mail')
console.log(insertMail);


const utentiAutorizzati = ["example@gmail.com", "example1@gmail.com","example2@gmail.com", "example3@gmail.com", "example4@gmail.com", "example5@gmail.com", "example6@gmail.com",
"example7@gmail.com"];

console.log(utentiAutorizzati);

// controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati).

let emailComferm = true;

for (let i = 0; i < utentiAutorizzati.length; i++){
  // stampa un messaggio appropriato sull’esito del controllo.

  if (utentiAutorizzati[i] === insertMail){
    emailComferm = true;
    document.getElementById('mail-output').innerHTML = "Welcome back!";
  } else {
    document.getElementById("mail-output").innerHTML = "Sorry, your mail isn't registrated";
  }
}



// Gioco dei dadi


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.


const gameResult = document.getElementById('resultt');
limit = 6;
let numberPlayer = Math.floor(Math.random() * limit);
let computerPlayer = Math.floor(Math.random() * limit);

document.getElementById('number-player').innerHTML(numberPlayer);

document.getElementById('number-computer').innerHTML(computerPlayer);

// Creare il button per il risultato

gameResult.addEventListener('click', function(){
  if(numberPlayer > computerPlayer) {
    document.getElementById('resultt').innerHTML = "Player1 won!";
  }else if (numberPlayer === computerPlayer){
    document.getElementById('resultt').innerHTML = "Peer!";
  }else {
    document.getElementById('resultt').innerHTML = "Computer won!";
  }
});


//NON SONO RIUSCITA AD ANDARE AVANTI, MI SPIACE