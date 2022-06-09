
// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

let numbersUser = [1,2,3,4,5,6,7,8,9];
 console.log(numbersUser);

 // Stampo nell'id rosso i numeri dispari e in verde i numeri pari
for(let i = 0; i <numbersUser.length; i++){
    console.log(numbersUser[i]);
    let thisNumber = numbersUser[i];
    if(i % 2 === 0) {
        document.getElementById('green').innerHTML += thisNumber;
    }
    else{
        document.getElementById('red').innerHTML += thisNumber;
    }
    
}