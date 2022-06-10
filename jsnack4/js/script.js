

//- Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

// Creo un Array vuoto
 let userService = [];

 // Chiedo all'utente di inserire un numero 

 for( let i = 0 ; i < 6 ; i++) {
     let userNumber = parseInt(prompt("Inserisci un numero"));

    if( userNumber % 2 !== 0) {
        userService.push(userNumber);
        
    }
 }
 console.log(userService);