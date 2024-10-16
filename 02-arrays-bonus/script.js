const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

console.log("Lista originale : ", teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// si può usare il metodo reverse
// come altro metodo forse più "pulito" si poteva scorrere l'array al contrario nel for (quindi dall'alto verso il basso), componendo reversedTeachers (che andrebbe ridichiarato come let) mano a mano aggiungendoci le stringhe dell'array, quindi non utilizzando l'array di appoggio // non ho usato questo metodo perchè mi è venuto dopo

const reversedTeachersArray = [];

for (let i = 0, j = teachers.length - 1; i < teachers.length; i++, j--) {
  // non sono sicuro del perchè non debba dichiarare let sul contatore j ma penso sia perchè è gia dichiarato su i e li conta dello stesso tipo, in caso contrario non ho capito
  reversedTeachersArray[j] = teachers[i];
}
const reversedTeachers = reversedTeachersArray.join();
console.log("Nomi in ordine invertito : ", reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

let longNames = "";

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5 && longNames === "") {
    // per il primo nome non metto la virgola davanti
    longNames = teachers[i];
  } else if (teachers[i].length >= 5) {
    longNames = longNames + "," + teachers[i];
  }
}

console.log("Solo nomi lunghi : ", longNames);

// 3. Rimuovi 'Ed' dall'array teachers
// si può usare includes per trovarlo senza ciclo
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Ed") teachers.splice(i, 1);
}

console.log("Non c'è Ed : ", teachers);
