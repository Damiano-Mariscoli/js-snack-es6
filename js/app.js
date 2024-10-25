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




