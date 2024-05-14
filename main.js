'use strict';

console.log('Ciao mondo');

let secondi = 10;

function countDown(){
    if (secondi === 0){
        console.log('Buon anno!');
        alert('Buon anno!');
        clearInterval(clock);
    } else {
        console.log(secondi);
        secondi--;
    }
}


const clock = setInterval(countDown, 1000);
