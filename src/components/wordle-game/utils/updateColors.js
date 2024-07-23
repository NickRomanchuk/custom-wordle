// @ts-nocheck
export function updateColors(guess, correctWord, guesses) {
  for (let i = 0; i < guess.length; i++) {                                // for each letter in the guess
    var charGuess = guess[i]
    var charCorrect = correctWord[i]
    var id = guesses.toString().concat(i.toString())

    var correctLoc = (charGuess.toLowerCase() === charCorrect)            // check if letter is in the correct location
    var inWord = correctWord.includes(guess[i].toLowerCase())             // check if letter is in the word

    var element;
    if (correctLoc) {                                                     // if in correct location
      document.getElementById(charGuess).className = "key-correct"        // update classnames
      document.getElementById(id).className = 'cell-correct form-control'
      document.getElementById(`solution-${i}`).value = charGuess;
    } else if (inWord) {                                                  // if in word
      element = document.getElementById(charGuess)                        // update classnames
      if (element.className !== "key-correct") {
        element.className = "key-maybe";
      }
      document.getElementById(id).className = 'cell-maybe form-control'
    } else {                                                              // if not in word
      element = document.getElementById(charGuess)                        // update classnames
      if (element.className !== "key-correct" &&
      element.className !== "key-maybe" ) {
        element.className = "key-wrong";
      }
      document.getElementById(id).className = 'cell-wrong form-control'
    }
  }
}