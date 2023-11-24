/*Es 3
Dato il seguente oggetto che rappresenta un libro, esegui i compiti sottostanti:
Esame Modulo JavaScript 

1. Aggiungi una nuova proprietà rating all'oggetto libro, che rappresenta il rating
del libro, e inizializzalo a 6 .
2. Aggiungi un metodo increaseRating che accetta come argomento un valore
numerico e che incrementa il rating del libro del valore passato alla funzione. (10

Il nuovo rating risultante, non può superare 10. 
3. Rimuovi la proprietà year dall'oggetto libro. 
4. Stampa in console ogni proprietà dell'oggetto libro in questo formato: "[chiave]:
[valore]" . */

const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    };

    book.rating = 6;
    book.increaseRating = function (increaseOf){
        const newRating = this.rating + increaseOf;
        this.rating = newRating > 10 ? 10 : newRating;
    };
    delete book.year;

    book.increaseRating(2.5);

    for(const entry of Object.entries(book)){
        const key = entry[0];
        const val = entry[1];
        const msg = `[${key}] : [${val}]`;
        console.log(msg);

};


 //console.log(Object.entries(book));