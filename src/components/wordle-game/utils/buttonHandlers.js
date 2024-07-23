import { LOWEST_WORD_LENGTH, NOT_WORD_MESSAGE, NO_DELETE_MESSAGE, wordLists } from "constants/constants"
import { updateColors } from "./updateColors"
import { endGame } from "./endGame"

export function handleDelete(guessedWords, setMessage, setShowAlert, setGuessedWords) {
    let guess = guessedWords[guessedWords.length - 1]   // get the current guess from the list of guesses
    let wordEmpty = (guess.length <= 0)                 // check if the word is empty

    if (wordEmpty) {                                    // if empty word
        setMessage(NO_DELETE_MESSAGE)                   // reset message
        setShowAlert(true)          
    } else {
        guess = guess.slice(0, -1)                             // if word isn't empty, remove the last letter
        setGuessedWords([...guessedWords.slice(0, -1), guess]) // remove the old guess and append the updated guess with the last letter removed
    }
}

export function handleEnter(correctWord, wordLength, numGuesses, guessedWords, setMessage, setShowAlert, setShowMenu, setGuessedWords) {
    let wordList = wordLists[wordLength - LOWEST_WORD_LENGTH]   // get the correct word list
    let guess = guessedWords[guessedWords.length - 1]           // get the current guess from the list of guesses

    let notWord = !wordList.includes(guess.toLowerCase())       // check if guess is a word
    let isCorrectWord = (guess.toLowerCase() === correctWord)   // check if guess is the correct word
    let outOfGuesss = (guessedWords.length >= numGuesses)       // check if out of guesses
   
    if (notWord) {                                              // if check is not a word
        setMessage(NOT_WORD_MESSAGE)                            // reset message
        setShowAlert(true)                                      // send message to user
        return                                                  // exit button handler
    } 

    if (isCorrectWord) {                                                                        // if guess is the correct word
        updateColors(guess, correctWord, guessedWords.length - 1)                               // update colors
        endGame(true, setMessage, setShowAlert, setShowMenu, setGuessedWords)   // end the game
        return
    }

    if (outOfGuesss) {                                                                          // if out of guesses
        updateColors(guess, correctWord, guessedWords.length - 1)                               // update colors
        endGame(false, setMessage, setShowAlert, setShowMenu, setGuessedWords, correctWord)  // end the game
    } else {                                                                                    // if guess is real word, not the correct word, and there are guesses remaining.....
        setGuessedWords([...guessedWords, ''])                                                  // start a new guess on the list of guesses
        updateColors(guess, correctWord, guessedWords.length - 1)                               // update colors
    }
}

export function handleLetter(pressedKey, guessedWords, wordLength, setGuessedWords) {
    let guess = guessedWords[guessedWords.length - 1]           // get the current guess from the list of guesses
    let wordFull = (guess.length >= wordLength)                 // check if word is full

    if (!wordFull) {                                            // if word isn't full
        guess = guess.concat(pressedKey)                        // add the pressed key to the guess
        setGuessedWords([...guessedWords.slice(0, -1), guess])  // remove old guess and append the update guess to the list of guesses
    }
}
