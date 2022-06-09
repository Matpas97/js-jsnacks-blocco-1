
// Chiedi un numero di 4 cifre all'utente nel prompt 
// e calcola la somma di tutte le cifre che compongono il numero

// Chiedo all'utente un numero di 4 cifre
let userNumber = prompt("Inserisci un numero di quattro cifre");

// Calcolo la somma di tutte le cifre che compongono il numero 

let somNumber = 0;

for(let i = 0; i < userNumber.length; i++) {
    let singleNumber = parseInt(userNumber[i]);

    somNumber += singleNumber;

}
console.log(somNumber);