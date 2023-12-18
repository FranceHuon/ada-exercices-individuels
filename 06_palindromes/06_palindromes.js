// Étape 1 : Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

// Fonction qui renvoie le nombre de jours par mois selon l'annee
function maxDaysinMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// Fonction qui vérifie que le jour est bien compris entre 0 et 31
function validDay(newDay, newMonth, newYear) {
  let maxDay = maxDaysinMonth(newMonth, newYear); // maxDay variable qui contient le result de maxDaysinMonth
  return newDay <= maxDay && newDay > 0; // condition booleenne pas besoin de mettre return true et return false
}

// Fonction qui vérifie que l'année est bien comprise entre 999 et 9999
function validYear(newYear) {
  return newYear <= 9999 && newYear > 999; //condition booleenne return true ou false
}

// Fonction qui vérifie que le mois est compris entre 0 et 12
function validMonth(month) {
  return month <= 12 && month > 0;
}

function parseDate(dateAsString) {
  let array = dateAsString.split("/");
  let day = parseInt(array[0]);
  let month = parseInt(array[1]);
  let year = parseInt(array[2]);
  return [day, month, year];
}

function isValidDate(date) {
  let [day, month, year] = parseDate(date); //pattern matching
  return validDay(day, month, year) && validMonth(month) && validYear(year);
}
console.log (isValidDate("21/14/56"))

// Fonction qui permet de transformer une date en string en array
function dateAsStringToArray(dateAsString) {
  let arrayOfDate = Array.from(dateAsString);
  return arrayOfDate;
}

// Fonction pour retirer les slashs des dates
function deleteSlash(dateAsString) {
  let myArray = dateAsStringToArray(dateAsString);
  delete myArray[2];
  delete myArray[5];
  return myArray;
}

// Fonction qui reformate le tableau
function formatArray(dateAsString) {
  let newArray = deleteSlash(dateAsString);
  let noEmptyStrings = [];
  for (let item of newArray) {
    if (item !== undefined) {
      noEmptyStrings.push(item);
    }
  }
  return noEmptyStrings;
}

// Fonction qui fait un reverse de tableau
function reverseArray(dateAsString) {
  let reverseArray = formatArray(dateAsString);
  return reverseArray.reverse();
}

// Étape 2 : Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome.

// Fonction qui renvoie true si les deux tableaux sont similaires
function isDatePalindrome(dateAsString) {
  if (!isValidDate(dateAsString)) return false;
  // return isPalindrome(dateAsString);
  let array1 = formatArray(dateAsString);
  let array2 = reverseArray(dateAsString);
  return array1.toString() === array2.toString();
}
console.log(isDatePalindrome("11/02/2011"));
console.log(isDatePalindrome("26/02/1989"));

// Étape 3 : Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.

// Fonction qui génère les prochains palindromes avec x en paramètre
function getNextPalindromes(x) {
  let result = [];
  let currentDate = new Date();
  // on boucle tant que la longueur du tableau est inférieure à x
  while (result.length < x) {
    let currentDateAsString = currentDate.toLocaleDateString("fr"); //On convertit en chaine de caractère et on stocke dans une variable
    if (isDatePalindrome(currentDateAsString)) {
      result.push(currentDateAsString);
    }
    let day = currentDate.getDate();
    currentDate.setDate(day + 1);
  }
  return result;
}

console.log(getNextPalindromes(5));

