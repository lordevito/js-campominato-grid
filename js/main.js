`use strict`;

// const grigliaArray = 100;

// //functions

// function titoloOut (){
//     const titolo = document.getElementById(`remov`);
//     titolo.remove();
// }

// function scopriGriglia () {
//     titoloOut();
//     const grigliaTabella = document.createElement(`div`);
//     const tagMain = document.querySelector(`main`);
//     tagMain.append(grigliaTabella);
//     grigliaTabella.classList.add(`table`);   
//     for(let i = 0; i < grigliaArray.lenght - 1; i++){   
//         const celle = document.createElement(`div`); 
//         celle.classList.add(`celle`);
//         grigliaTabella.append(celle);
//         celle.addEventListener(`click`, interazioneBottone);
//         celle.innerHTML =  i;
//         celle.id = i;
//         console.log(grigliaArray.lenght);
//     }
// }

// function interazioneBottone (){
//     celle.classList.add (`.bg-blue`);
//     console.log(grigliaArray[i]);
// }

// //Dichiaro variabile per il pulsante e apro il collegamento al click sul bottone

// const btnPlay = document.querySelector(`button`);
// btnPlay.addEventListener(`click`, (scopriGriglia));

//Primo passo: richiamo dal file index il bottone e ci applico il metodo even listener al click.

const btnPlay = document.querySelector(`.btn`);
btnPlay.addEventListener(`click`, play);

//Creo una funzione per la cella singola dove creo il l'elemento div e glia ggiungo la classe css.

function creaCella (){
    const cella = document.createElement(`div`);
    cella.classList.add(`celle`);
    return cella;
}

//Dichiaro una variabile totaleCelle per il numero delle celle.

let totaleCelle = 100;

//Dichiaro una funzione da usare al click dove rimuovo il titolo iniziale, faccio comparire la griglia.
//Apro un ciclo dove richiamo la funzione per la creazione della cella, la scrivo nel file index,
//la appendo alla tabella e infine ci applico il colore blu e le stampo in console ogni volta che si clicca sopra.

function play() {
    const titolo = document.getElementById(`remov`);
    titolo.remove();
    const grigliaTabella = document.createElement(`div`);
    grigliaTabella.classList.add(`table`);
    const tagMain = document.querySelector(`main`);
    tagMain.append(grigliaTabella);
    for (let i = 0; i < totaleCelle; i++) {
        const cella = creaCella();
        cella.innerText = (i + 1);
        cella.id = i;
        grigliaTabella.appendChild(cella);
        cella.addEventListener(`click`, (function (index) {
            return function () {
                cella.classList.add(`bg-blue`);
                console.log(index + 1);
            }
        })(i));
    }
}
// cella.addEventListener(`click`, () => cella.classList.add(`bg-blue`));



