/*Es 2
Scrivi una funzione JavaScript che:
1. Accetta un array di stringhe come argomento.
2. Calcola la concatenazione di tutte le stringhe che iniziano con la lettera "A" o "a".
3. Se la lunghezza della stringa concatenata supera i 10 caratteri, troncala a 10
caratteri e restituiscila. 
4. Se il ciclo si completa senza che la stringa superi i 10 caratteri, restituisci la
stringa concatenata.*/

function joinStrArr (strArr){
    let result = ``;

    for(let i = 0; i < stringList.length; i++){
        const str = strArr[i];
        const firstLetterA = str.toLowerCase().startsWith(`a`);
        if(firstLetterA){
            result += str;
            }
        }
        if(result.length > 10){
            result = result.substring(0, 10);
        }
    return result;
}
const stringList = [`Arciduca`, `Arco`, `Bersaglio`, `Piattello`, `Boschi`, `Alberi`];
const finalString = joinStrArr(stringList);
console.log(finalString);