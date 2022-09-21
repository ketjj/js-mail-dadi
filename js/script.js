
const users = ['example@gmail.com', 'example2@gmail.com', 'example3@gmail.com', 'example4@gmail.com', 'example5@gmail.com'];

// const userMail = prompt('Inserisci la mail');
// console.log(userMail);

let msg = document.getElementById("mail-output");

// if(users.includes(userMail)){
//   msg.textContent = 'Ciao, sei autorizzato 🕵️‍♀️'
// } else{
//   msg.textContent = 'Ciao, sei il nuovo qui 🎉'
// }


let playerNum = Math.trunc((Math.random() * 6) + 1);

let comptNum = Math.trunc((Math.random() * 6) + 1);


document.getElementById('play').addEventListener('click', function(){
  document.getElementById('number-player').innerHTML = playerNum;
  document.getElementById('number-computer').innerHTML = comptNum;
  
  const outPut = document.querySelector('.output');
  if(playerNum > comptNum){
    outPut.innerHTML = 'Ha vinto il Player! 🎉🎉🎉'
  } else if(playerNum === comptNum){
    outPut.innerHTML = 'Pareggio! 🙌'
  } else{
    outPut.innerHTML = 'Ha vinto il Computer!💻 🤳'
  }
  
  playerNum = Math.trunc((Math.random() * 6) + 1);

  comptNum = Math.trunc((Math.random() * 6) + 1);
  console.log(playerNum);
  console.log(comptNum);

})