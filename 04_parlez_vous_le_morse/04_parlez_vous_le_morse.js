// Étape 1 : écrire une fonction qui va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

function getLatinCharacterList(string) {
	const myArray = string.split("");
	return myArray;
}
console.log(getLatinCharacterList("Hello world"));


// Étape 2 : ajouter le dictionnaire qui permettra d'établir une table de correspondances entre les caractères alphabets latin et l'alphabet morse. Créer une fonction qui en paramètre un caractère et renvoie sa correspondance en morse.

const latinToMorse = {
	'A': '.-',
	'B': '-...',
	'C': '-.-.',
	'D': '-..',
	'E': '.',
	'F': '..-.',
	'G': '--.',
	'H': '....',
	'I': '..',
	'J': '.---',
	'K': '-.-',
	'L': '.-..',
	'M': '--',
	'N': '-.',
	'O': '---',
	'P': '.--.',
	'Q': '--.-',
	'R': '.-.',
	'S': '...',
	'T': '-',
	'U': '..-',
	'V': '...-',
	'W': '.--',
	'X': '-..-',
	'Y': '-.--',
	'Z': '--..'
}

function translateLatinCharacter(char) {
	return latinToMorse[char]; //correspondance clef valeur
}
console.log(translateLatinCharacter('A'));

let character = prompt("Give a character");


// Étape 3 : ajouter une nouvelle fonction qui prend en paramètre du texte et qui va utiliser la fonction de l'étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

function encode(word) {
	let morsesArray = [];
	let characters = getLatinCharacterList(word);
	for (i = 0; i < characters.length; i++) {// à la place on peut faire for (character of characters)
		let character = characters[i];
		let morse = translateLatinCharacter(character);
		morsesArray.push(morse);
	}
	return morsesArray;
	// return morsesArray.join("") pour transformer en chaine de caractère
}

console.log(translateLatinCharacter(character));
console.log(encode("COUCOU"));


// Étape 4 : ajouter le dictionnaire de correspondance inversé au code. Appliquer les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash). Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
}

// function decode() {

// }
// decode()

// function getMorseCharacterList()
// function translateMorseCharacter()