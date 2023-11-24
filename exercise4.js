/*Es 4
Crea una pagina HTML con un <input> di testo, un elemento <button> , un elemento
<p> con id “ errorMessage ” e un elemento <ul> con id " tasks ".
Scrivi codice JavaScript che aggiunge un ascoltatore di eventi al <button> che,
quando cliccato, se l'utente non ha scritto nulla nell’ <input> :
inserisce all'interno del <p> " errorMessage " un messaggio di errore che dice "Per
favore, inserisci del testo."; 
Altrimenti, se c’è del testo all’interno dell’ <input> :
svuota il contenuto del <p> " errorMessage "; 
inserisce all'interno del <ul> " tasks " un nuovo <li> che ha come contenuto ciò
che è stato inserito dall’utente nell’ <input>;*/

const btn = document.querySelector(`button`);
btn.addEventListener(`click`, () => {

    const input = document.querySelector(`input`)
    const val = input.value;
    const isEmpty = val.length === 0;

    const p = document.getElementById(`errorMessage`);
    p.innerText = isEmpty ? `Per favore, inserisci del testo.` : ``;

    if(!isEmpty){
        const ul = document.getElementById(`tasks`);
        const li = document.createElement(`li`);
        li.innerText = val;
        ul.appendChild(li);
    }

});