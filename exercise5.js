/*Es 5
Scrivi una funzione power per elevare un numero ad una potenza data:
1. Prende due numeri come parametri ( base e exponent ).
2. Controlla che effettivamente siano stati passati due numeri. In caso contrario,
lancia un errore che mostra nel messaggio quale dei parametri non è un
Esame Modulo JavaScript 3
numero. Se entrambi non sono dei numeri, il messaggio d’errore li mostra
entrambi. 
3. Nel caso in cui sia avvenuto un errore, la funzione ritorna null , altrimenti ritorna
base elevato alla exponent . 
4. Indipendentemente dal successo o dal fallimento, stampa in console un
messaggio che indica che l'operazione è completa. */

function power(base, exponent){
    const baseIsNotNum = isNaN(base);
    const expIsNotNum = isNaN(exponent);

    let result = null;

    try{
        if(baseIsNotNum && expIsNotNum){
      throw new Error(`Base and exponent are not a number`); 
        }else if(baseIsNotNum){
        throw new Error(`Base is not a number`);
        }else if(expIsNotNum){
        throw new Error(`Exponent is not a number`)
        }

      }catch(err){
        console.error(err);
        return result;

        }finally{
        console.log(`Operazione compiuta`)
        }
        
      result = Math.pow(base, exponent);
      return result;
};
const testError = power(`4`,`2`);
console.log(testError);

const testError2 = power(`n`,`2`);
console.log(testError2);

const testError3 = power(`n`,`n`);
console.log(testError3);