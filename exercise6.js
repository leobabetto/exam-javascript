/*Es 6
Dato il seguente oggetto annidato che rappresenta un team di sviluppatori, esegui i
compiti sottostanti:

1. In un commento, scrivi quanti oggetti l’espressione soprastante ha inserito in
memoria ed elencali. 
2. Crea una variabile chiamata teamLead che faccia riferimento alla proprietà lead
dell'oggetto devTeam . Aggiungi "GraphQL" alle skills di teamLead .
3. Crea una copia dell'oggetto devTeam e memorizzala in una nuova variabile
chiamata devTeamCopy . Non puoi usare la funzione integrata structuredClone . Poi,
cambia la proprietà projectName di devTeam2 in "MobileApp". 
4. Costruisci una funzione che crea e restituisce un oggetto tester a partire dal
parametro name (stringa). Durante la creazione dell’oggetto, la funzione
dovrebbe anche assegnare un array skills con tre stringhe casuali tra
"JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django",
"PostgreSQL"
Usa questa funzione per aggiungere un nuovo tester a devTeamCopy . 
5. In un commento, scrivi quanti oggetti sono stati creati in memoria oltre a quelli
iniziali, e giustifica la tua risposta. */

const devTeam = {
    lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
    };
       
const teamLead = devTeam.lead;
teamLead.skills.push(`GraphQL`);

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = `MobileApp`;

//console.log(devTeam, devTeamCopy);

function createTester(name){
    const skillsAll = ["Javasript", "React", "Node.Js", "Phyton", "CSS", "HTML", "Django", "PostgreSQL"];
    const skills = [];
    let count = 0;

    while (count < 3){
        const min = 0;
        const max = skillsAll.length - 1;
        const casualIx = Math.floor(Math.random() * (max-min) + min);
        const casualskill = skillsAll[casualIx];
        skills.push(casualskill)
        skillsAll.splice(casualIx, 1);
        count++;
    }
    const tester = {
        name,
        skills
    }
    return tester
}
const newTester = createTester(`leo`);
console.log(newTester, devTeamCopy);