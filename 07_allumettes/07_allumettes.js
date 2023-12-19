// Étape 1 : Fonction qui prend en paramètre le nombre d'allumettes à enlever du reste 
function calculateMatchesToRemove(matchesToRemove, playerOneGuess) {
  matchesToRemove -= playerOneGuess;
  return matchesToRemove;
}


// Étape 2 : Fonction qui demande à l'utilisateur combien d'allumettes il souhaite retirer 
// let playerOneGuess = prompt("Play ! ");


// Étape 3 : Fonction qui limite le nombre d'allumettes à pouvoir être retirées entre 1 et 6 
function validMatches(guess) {
  let min = 1;
  let max = 6;
  if (guess < min || guess > max) {
    return false;
  } else {
    return true;
  }
}


// Fonction qui vérifie qu'il y a assez d'allumettes dans le tas
function enoughMatches(guess, matchesToRemove) {
  if (guess > matchesToRemove) {
    console.log("There is not enough matches!");
    return false;
  } else {
    console.log("Keep playing!");
    return true;
  }
}


// Étape 4 : Rajout d'un deuxième joueur 
function gamePlay() {
  let matchesToRemove = 50;
  let isPlayerOne = true;
  while (true) {
    let player;
    if (isPlayerOne) {
      player = "Player One";
    } else {
      player = "Player Two";
    }
    let guess = prompt(
      "Welcome " +
      player +
      " give a number, there is still " +
      matchesToRemove +
      " matches to remove"
    );
    if (validMatches(guess) && enoughMatches(guess, matchesToRemove)) {
      matchesToRemove -= guess;
    }
    if (matchesToRemove == 0) {
      console.log("Well done " + player + " you win!");
      break;
    }
    let newPlayer = !isPlayerOne;
    isPlayerOne = newPlayer;
  }
}

gamePlay();


// Étape 5 : Mode multi-joueurs
function gameMultiPlay() {
  let matchesToRemove = 50;
  let numberOfPlayers = prompt("How many?");
  let currentPlayer = 1;
  while (true) {
    let player = "Player " + currentPlayer;
    let guess = prompt(
      "Welcome " +
      player +
      " give a number, there is still " +
      matchesToRemove +
      " matches to remove"
    );
    if (validMatches(guess) && enoughMatches(guess, matchesToRemove)) {
      matchesToRemove -= guess;
    }
    if (matchesToRemove == 0) {
      console.log("Well done " + player + " you win!");
      break;
    }
    if (numberOfPlayers == currentPlayer) {
      currentPlayer = 1;
    } else {
      currentPlayer++;
    }
  }
}

gameMultiPlay();


