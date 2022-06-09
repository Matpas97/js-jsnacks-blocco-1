
//- Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Chiedo 10 volte all'utente di inserire un numero 
let somNumber = 0;

for(let i = 0; i < 10; i++) {

    let userNumber =  parseInt(prompt(' Inserisci un numero'));

    let singleNumber = parseInt(userNumber[i]);

     somNumber += singleNumber;
}

// Stampo tutti i numeri inseriti
 
console.log(somNumber);