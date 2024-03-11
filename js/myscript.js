/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


let btn = document.getElementById('control');

btn.addEventListener('click', function(){
    let mailList = [
    'usermail-0@mail.com',
    'usermail-1@mail.com',
    'usermail-2@mail.com',
    'usermail-3@mail.com'
    ];
    console.log(mailList);
    let userMail = document.getElementById('mailValue').value;
    let trovato = false;
    console.log('stai controllando');
    console.log(userMail);

    for(let i = 0; i < mailList.length; i++){
        if(userMail.toLowerCase() === mailList[i].toLowerCase()){
            console.log(mailList[i]);
            trovato = true;
        }
    }
    const result = document.querySelector('.result');
    if(trovato){
            result.innerHTML = 'Questo utente è nella lista'
        } else{
            result.innerHTML = `Questo utente NON è nella lista`
     }
});

let btnReset = document.getElementById('reset');

btnReset.addEventListener('click', function(){
    document.getElementById('mailValue').value = '';
});

/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let btnDadi = document.getElementById('btnDadi');
//<img src="img/dadi/1.svg" alt="1" class="img-fluid ">

btnDadi.addEventListener('click', function(){
    let pcDice = document.getElementById('pcDice'); 
    let userDice = document.getElementById('userDice'); 
    let winner = document.getElementById('winner');
    let pcNum = getRndInteger(1,6);
    let userNum = getRndInteger(1,6);
    if(pcNum === userNum){
        pcDice.innerHTML = `<img src="img/dadi/${pcNum}.svg" alt="${pcNum}" class="img-fluid ">`;
        userDice.innerHTML = `<img src="img/dadi/${userNum}.svg" alt="${userNum}" class="img-fluid ">`;
        winner.innerHTML = `In caso di parità il banco vince sempre`;
        console.log(pcNum);
        console.log(userNum);
    }   else if(pcNum > userNum){
        pcDice.innerHTML = `<img src="img/dadi/${pcNum}.svg" alt="${pcNum}" class="img-fluid ">`;
        userDice.innerHTML = `<img src="img/dadi/${userNum}.svg" alt="${userNum}" class="img-fluid ">`;
        winner.innerHTML = `Ha vinto il banco, ritenta`;
        console.log(pcNum);
        console.log(userNum);
    } else {
        pcDice.innerHTML = `<img src="img/dadi/${pcNum}.svg" alt="${pcNum}" class="img-fluid ">`;
        userDice.innerHTML = `<img src="img/dadi/${userNum}.svg" alt="${userNum}" class="img-fluid ">`;
        winner.innerHTML = `Complimenti hai vinto contro il banco`;
        console.log(pcNum);
        console.log(userNum);
    }
})

//console.log(pcNum);
//console.log(userNum);


