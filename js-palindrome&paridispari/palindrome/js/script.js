


let userWord = prompt('Inserisci una parola', 'anna');
while(!userWord ){
    userWord = prompt('Inserisci una parola', 'anna')
}

const result = isPalindrome(userWord);

console.log(result);

function isPalindrome(word) {
    const reverseWord = word.split().reverse().join('');

    return  word === reverseWord ? true : false;
}

