/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto*/

const autorized = ['ugodeughi@gmail.com', 'lellodelellis@gmail.com'];
const email = prompt('insert your email');
const submit = document.getElementById('_submit');


for (i = 0; i < autorized.length; i++){
  if(email === autorized[i]) {
    document.getElementById('autorization').innerHTML = 'you are welcome'
  } else {
        document.getElementById('autorization').innerHTML = 'please, register'
  }
}


const btn = document.querySelector('body > button');
const player = document.getElementById('_player');
const computer = document.getElementById('_computer');


btn.addEventListener('click', function() {
  player.innerHTML = Math.floor(Math.random() * 6) + 1;
  computer.innerHTML = Math.floor(Math.random() * 6) + 1;

  if(player.innerHTML > computer.innerHTML) {
    document.getElementById('_result').innerHTML = 'wow, sei fortunato!'
  } else if(player.innerHTML = computer.innerHTML) {
    document.getElementById('_result').innerHTML = 'pari...spareggiamo!!!'
  } else {
    document.getElementById('_result').innerHTML = 'Riprova, sarai più fortunato'
  }
})

