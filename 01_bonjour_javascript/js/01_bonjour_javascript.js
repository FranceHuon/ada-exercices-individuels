// Étape 1
// Faire une fonction prompt() pour demander son nom à l'utilisateur.ice.
function askName() {
let newName = prompt ("Quel est ton nom ?");
console.log (newName);
// Créer une variable dans laquelle on utilise la concaténation pour stocker la chaine de caractère "Bonjour" suivi du nom saisi par l'utilisateur.ice.
let welcomeMessage = "Bonjour " + newName;
console.log (welcomeMessage);
// Ajouter un element h2 dans le corps de la page HTML qui entoure la chaine de caractères stockée.
document.body.innerHTML += "<h2> Coucou! </h2>";
}

// Étape 2
// À la suite de ce qui a été écrit dans l’étape 1, réutiliser le même procédé pour demander l’année de naissance de l’utilisateur·ice.
function askBirthYear() {
let birthYear = prompt ("En quelle annee es tu ne ?");
console.log (birthYear);
// Créer une variable qui contient l’age de l’utilisateur·ice, calculé à partir de son année de naissance et de l'année en cours.
let date = new Date().getFullYear();
console.log (date);
let age =  date - birthYear;
console.log (age);
// Sur la page HTML, ajouter un element h3 qui affiche "Vous avez " suivi de l’age calculé précédemment suivi de "ans" (exemple: "Vous avez 32 ans").
let userMessage = "Vous avez" + " " + age + " "+ "ans";
console.log(userMessage);
document.body.innerHTML += `<h3>${userMessage}</h3>`;
}

askName()
askBirthYear()

// Étape 3
// Refactorer le code
function askMonthOfBirth() {
    let monthOfBirth = prompt ("Quel mois es tu ne ?")
    console.log (monthOfBirth)
    let month = new Date().getMonth()+1;
    console.log(month);   
}

askMonthOfBirth()