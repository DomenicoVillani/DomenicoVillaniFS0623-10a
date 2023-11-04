/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for(let i=0; i<pets.length ; i++)
{
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()
for(let i=0; i<pets.length ; i++)
{
  console.log(pets[i])
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()
for(let i=0; i<pets.length ; i++)
{
  console.log(pets[i])
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
for(let i=0; i<pets.length ; i++)
{
  console.log(pets[i])
}
pets.push(pets.shift())
for(let i=0; i<pets.length ; i++)
{
  console.log(pets[i])
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active']
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT']
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line']
  }
]
for(let i=0; i<cars.length; i++)
{
  cars[i].licensePlate = prompt(`inserisci la targa dell'auto ${cars[i].model} `)
  console.log(cars[i])
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let nomecar = prompt(`inserisci il nome della macchina`)
let modelcar = prompt(`inserisci il modello della macchina `)
let colorcar = prompt(`inserisci il colore della macchina`)
let trimscar = []
let num = prompt('quanti rifiniture vuoi aggiungere?')
for(let i=0; i<num ; i++)
{
  let x=prompt(`inserisci la rifinitura della macchina`)
  trimscar[i]=x
}
let licensePlate = prompt(`inserisci la targa dell'auto `)
let oggNuovo = {brand: nomecar, model: modelcar ,color: colorcar, trims: trimscar}
let aggiungi = cars.push(oggNuovo)
for(let i=0; i<cars.length ; i++)
{43
  console.log(cars[i])
}

for(let i=0; i<cars.length ; i++)
{
  cars[i].trims.pop()
  console.log(cars[i])
}
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(let i=0; i<cars.length ; i++)
{
  justTrims[i]=cars[i].trims[0]
  console.log(justTrims[i])
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
let risu
for(let i=0; i<cars.length ; i++)
{
  let primaLettera= cars[i].color.charAt(0)
  if(primaLettera == 'b'){
    risu = "Fizz"
  }else {
    risu = "Buzz"
  }
  console.log(risu)
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let confronto = 0
while(numericArray[confronto] !== 32 && confronto<numericArray.length){
  console.log(numericArray[confronto])
  confronto++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let numberArray = []
for(let i=0; i<charactersArray.length; i++){
  switch(charactersArray[i]){
    case "a":
      numberArray[i]=1
      break
    case "b":
      numberArray[i]=2
      break
    case "c":
      numberArray[i]=3
      break
    case "d":
      numberArray[i]=4
      break
    case "e":
      numberArray[i]=5
      break
    case "f":
      numberArray[i]=6
      break
    case "g":
      numberArray[i]=7
      break
    case "h":
      numberArray[i]=8
      break
    case "i":
      numberArray[i]=9
      break
    case "l":
      numberArray[i]=10
      break
    case "m":
      numberArray[i]=11
      break
    case "n":
      numberArray[i]=12
      break
    case "o":
      numberArray[i]=13
      break
    case "p":
      numberArray[i]=14
      break
    case "q":
      numberArray[i]=15
      break
    case "r":
      numberArray[i]=16
      break
    case "s":
      numberArray[i]=17
      break
    case "t":
      numberArray[i]=18
      break
    case "u":
      numberArray[i]=19
      break
    case "v":
      numberArray[i]=20
      break
    case "z":
      numberArray[i]=21
      break
    default:
      console.log("non e' una lettera")
  }
  console.log(numberArray[i])
}
