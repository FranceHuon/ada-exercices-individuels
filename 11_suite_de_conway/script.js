// fonction qui prend en paramètre une chaine de caractères
// renvoie la même chaine de caractères dans laquelle les caractères successifs non identiques sont séparés par un espace
function decoupeChaine(chaine) {
  let nelleChaine = "";
  for (let i = 0; i < chaine.length; i++) {
    nelleChaine += chaine.at(i)
    if (i < chaine.length - 1 && chaine.at(i) != chaine.at(i + 1)) {
      nelleChaine += " "
    }
  }
  return nelleChaine;
}

console.log(decoupeChaine("aabbcaaccb"));


// fonction qui prend en paramètre une chaine de caractère,
// renvoie une chaine de caractères qui décrit les caractères qui constituent la chaîne en paramètre
function decritChaine(chaine) {
  let nelleChaine = "";
  let compte = 0;
  for (let i = 0; i < chaine.length; i++) {
    compte += 1;
    if (chaine.at(i) != chaine.at(i + 1)) {
      nelleChaine += compte + chaine.at(i);
      compte = 0;
    }
  }
  return nelleChaine;
}

console.log (decritChaine("aabbcaaccb"));


// fonction qui donne les n premiers termes de la suite qui commence par le caractère carac
function suiteConway(carac, n) {
  let previous = carac;
  console.log(previous);
  for (let i = 0; i < n - 1; i++) {
    let current = decritChaine(previous);
    console.log(current);
    previous = current;
  }
}

suiteConway('a', 3);




// function decoupeChaine(chaine) {
//   let nelleChaine = "";
//   for (let i = 0; i < chaine.length; i++) {
//     if (chaine.at(i) == chaine.at(i + 1)) {
//       nelleChaine += chaine.at(i) + chaine.at(i + 1);
//     } else {
//       if (nelleChaine.at(-1) == " " || nelleChaine == "") {
//         nelleChaine += chaine.at(i) + " ";
//       } else {
//         nelleChaine += " ";
//       }
//     }
//   }
//   return nelleChaine;
// }

// console.log(decoupeChaine("aabbcaaccb"));


