/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

 const bici = [
     {   nome: '1',
         peso: 60
     },
     {   nome: '2',
         peso: 50
     },
     {   nome: '3',
         peso: 30
     },
     {   nome: '4',
         peso: 50
     },
     {   nome: '5',
         peso: 20
     },
     {   nome: '6',
         peso: 50
     },
     {   nome: '7',
         peso: 5
     },
     {   nome: '8',
         peso: 50
     },
     {   nome: '9',
         peso: 20
     },
 ]
 let minPeso = bici[0].peso
 for(let i = 0; i < bici.length; i++) {
  
     console.log(bici[i].peso)
     if (bici[i].peso < minPeso) {
         console.log('sono entrato nel if')
         minPeso = bici[i].peso
     }
  
     console.log(minPeso)
 }





/*Snack2
-Creare un array di oggetti di squadre di calcio.
- Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
-Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
-Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
-Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


const squadre = [
    {nome: 'Juventus', punti: 0, falli: 0},
    {nome: 'Inter', punti: 0, falli: 0},
    {nome: 'Milan', punti: 0, falli: 0},
    {nome: 'Roma', punti: 0, falli: 0},
    {nome: 'Napoli', punti: 0, falli: 0},
    {nome: 'Lazio', punti: 0, falli: 0},
    {nome: 'Fiorentina', punti: 0, falli: 0},
    {nome: 'Torino', punti: 0, falli: 0},
]
console.log(squadre)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let nuovoArray = []

 for(let i= 0; i< squadre.length;  i++){
    let puntiNew = squadre[i].punti
    let falliNew = squadre[i].falli
    let nomeNew = squadre[i].nome
    puntiNew = getRandomInt(80, 200)
    falliNew = getRandomInt(50, 300)
    nuovoArray.push({nomeNew ,puntiNew, falliNew})
    
 }

 console.log(nuovoArray)



