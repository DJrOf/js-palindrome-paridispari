// Pari e dispari

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (min - max +1) + min);
    return randomNumber;
}

let userChoice = prompt('Scegli "pari" o "dispari"', 'pari').toLowerCase().trim();
while(userChoice !== 'pari' && userchoice !== 'dispari'){
    userChoice = prompt('Scegli "pari" o "dispari"', 'pari').toLowerCase().trim();
}

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5', '4'));
while(isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    userNumber = parseInte(prompt('Scegli un numero da 1 a 5', '4'));
}

console.log(userChoice);
console.log(userNumber);

const cpuNumber = getRandomNumber (1, 5);
console.log(cpuNumber);

const sum = userNumber + cpuNumber;
if ((isEven(sum) && userChoice === 'pari') || (!isEven(sum) && userChoice === 'dispari')) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}





