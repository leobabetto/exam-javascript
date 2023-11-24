/*Es 1
Crea un programma JavaScript che:
1. Chieda all'utente il suo nome e lo memorizzi in una variabile. 
2. Chieda all'utente il suo anno di nascita e lo memorizzi in un'altra variabile.
3. Visualizzi un messaggio che saluta l'utente con il suo nome e gli dice se è nato
in un anno bisestile.*/ 


const personName = prompt(`Inserisci il tuo nome`);

const birthYear = Number(prompt(`Inserisci il tuo anno di nascita`));

const leapyear = (birthYear % 400 === 0) ||
    ((birthYear % 4 === 0) && ! (birthYear % 100 === 0));

const msg = leapyear ? `Ciao ${personName}, sei nato in un anno bisestile` : `Ciao ${personName}`;
alert(msg);

