/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

let mailList = [
'usermail-0@mail.com',
'usermail-1@mail.com',
'usermail-2@mail.com',
'usermail-3@mail.com'
];
console.log(mailList);

let btn = document.getElementById('control');

btn.addEventListener('click', function(){
    let userMail = document.getElementById('mailValue').value;
    let trovato = false;
    console.log('stai controllando');
    console.log(userMail);
    console.log(mailList[0]);

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
})