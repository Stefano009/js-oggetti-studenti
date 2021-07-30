// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let studente =  {
    name : 'alfredo',
    lastname : 'fasullo',
    eta : '25'
};
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
var student = document.getElementById('studente'); 
console.log(student)
var addingVariable;
for (let key in studente){
   addingVariable = document.createTextNode(studente[key])
   console.log(addingVariable)
   student.appendChild(addingVariable);
   student.appendChild(document.createElement('br'));
   console.log(student)
}
// Creare un array di oggetti di studenti.

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.