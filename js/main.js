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
let students = [

 {
    name : 'alfredo',
    lastname : 'fasullo',
    eta : '25'
},
 {
    name : 'alfredo1',
    lastname : 'fasullo1',
    eta : '25+1'
},
 {
    name : 'alfredo2',
    lastname : 'fasullo2',
    age : '25+2'
},
 {
    name : 'alfredo3',
    lastname : 'fasullo3',
    age : '25+3'
},
 {
    name : 'alfredo4',
    lastname : 'fasullo4',
    age : '25+4'
},
]
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var studentName = document.getElementById('nome');
var studentLastname = document.getElementById('cognome');
var studentAge = document.getElementById('eta');
var nameVariable;
var lastnameVariable;
for (i = 0; i<students.length; i++){
    nameVariable = document.createTextNode(students[i]['name'])
    studentName.appendChild(nameVariable);
    studentName.appendChild(document.createElement('br'));
    console.log(studentName)
    lastnameVariable = document.createTextNode(students[i]['lastname'])
    studentLastname.appendChild(lastnameVariable);
    studentLastname.appendChild(document.createElement('br'));
    console.log(studentLastname)
    
}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
let userName = prompt('per favore inserisca il suo nome');
let userLastame = prompt('per favore inserisca il suo cognome');
let userAge = prompt('per favore inserisca la sua età');

let supportObject = {
    name : userName,
    lastname : userLastame,
    age : userAge
};
students.push(supportObject);
var userStudentName = document.getElementById('nomeUtente');
var userStudentLastname = document.getElementById('cognomeUtente');
var userStudentAge = document.getElementById('etaUtente');
for (i = (students.length - 1); i<students.length; i++){
    nameVariable = document.createTextNode(students[i]['name'])
    userStudentName.appendChild(nameVariable);
    userStudentName.appendChild(document.createElement('br'));
    console.log(studentName)
    lastnameVariable = document.createTextNode(students[i]['lastname'])
    userStudentLastname.appendChild(lastnameVariable);
    userStudentLastname.appendChild(document.createElement('br'));
    console.log(studentLastname)
    ageVariable = document.createTextNode(students[i]['age'])
    userStudentAge.appendChild(ageVariable);
    userStudentAge.appendChild(document.createElement('br'));
    console.log(studentAge)
}