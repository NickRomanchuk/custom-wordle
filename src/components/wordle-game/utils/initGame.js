import { LOWEST_WORD_LENGTH, wordLists } from "constants/constants"

export function initNewGame(wordLength, setCorrectWord, setGuessedWords) {
    let wordList = wordLists[wordLength - LOWEST_WORD_LENGTH]               // Get the correct word list (based on word length)
    let correctWord = wordList[Math.floor(Math.random()*wordList.length)]   // Randomly select a word from the list

    setCorrectWord(correctWord)                         // reset the correct word state variable to the randomly chosen word
    setGuessedWords([''])                               // reset the list of guess to empty
    console.log("The correct word is:", correctWord)    // print the correct word to the console
}
