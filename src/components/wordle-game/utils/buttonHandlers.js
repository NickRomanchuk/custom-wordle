import { LOWEST_WORD_LENGTH, NOT_WORD_MESSAGE, NO_DELETE_MESSAGE, wordLists } from "constants/constants"
import { updateColors } from "./updateColors"
import { endGame } from "./endGame"

export function handleDelete(guessedWords, setMessage, setShowAlert, setGuessedWords) {
    let guess = guessedWords[guessedWords.length - 1]
    let wordEmpty = (guess.length <= 0)

    if (wordEmpty) {
        setMessage(NO_DELETE_MESSAGE)
        setShowAlert(true)
    } else {
        guess = guess.slice(0, -1) 
        setGuessedWords([...guessedWords.slice(0, -1), guess])
    }
}

export function handleEnter(correctWord, wordLength, numGuesses, guessedWords, setMessage, setShowAlert, setShowMenu, setGuessedWords, setCorrectWord) {
    let wordList = wordLists[wordLength - LOWEST_WORD_LENGTH]
    let guess = guessedWords[guessedWords.length - 1]

    let notWord = !wordList.includes(guess.toLowerCase())

    if (notWord) {
        setMessage(NOT_WORD_MESSAGE)
        setShowAlert(true)
        return
    } 

    if (guess.toLowerCase() === correctWord) {
        updateColors(guess, correctWord, guessedWords.length - 1)
        endGame(true, setMessage, setShowAlert, setShowMenu, setGuessedWords, setCorrectWord)
        return
    }

    if (guessedWords.length === numGuesses) {
        updateColors(guess, correctWord, guessedWords.length - 1)
        endGame(false, setMessage, setShowAlert, setShowMenu, setGuessedWords, setCorrectWord)
    } else {
        setGuessedWords([...guessedWords, ''])
        updateColors(guess, correctWord, guessedWords.length - 1)
    }
}

export function handleLetter(pressedKey, guessedWords, wordLength, setGuessedWords) {
    let guess = guessedWords[guessedWords.length - 1]
    let wordFull = (guess.length >= wordLength)

    if (!wordFull) {
        guess = guess.concat(pressedKey) 
        setGuessedWords([...guessedWords.slice(0, -1), guess])
    }
}
