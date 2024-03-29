export function updateColors(guess, correctWord, guesses) {
    console.log("Here:", guess)
    console.log(guesses)
    console.log(correctWord)
    for (let i = 0; i < guess.length; i++) {
        console.log(guess[i])
        if (guess[i].toLowerCase() == correctWord[i]) {
          document.getElementById(guess[i]).className = "key-correct"
          document.getElementById(guesses.toString().concat(i.toString())).className = 'cell-correct form-control'
          
        } else if (correctWord.includes(guess[i].toLowerCase())) {

          if (document.getElementById(guess[i]).className != "key-correct") {
            document.getElementById(guess[i]).className = "key-maybe";
          }
          document.getElementById(guesses.toString().concat(i.toString())).className = 'cell-maybe form-control'
          
        } else {

          if (document.getElementById(guess[i]).className != "key-correct" &&
          document.getElementById(guess[i]).className != "key-maybe" ) {
            document.getElementById(guess[i]).className = "key-wrong";
          }
          document.getElementById(guesses.toString().concat(i.toString())).className = 'cell-wrong form-control'
        }
      }
}