import { LOWEST_WORD_LENGTH, wordLists } from "constants/constants"

export function initNewGame(wordLength, setCorrectWord) {
    let wordList = wordLists[wordLength - LOWEST_WORD_LENGTH]
    let correctWord = wordList[Math.floor(Math.random()*wordList.length)]

    setCorrectWord(correctWord)
    console.log("The correct word is:", correctWord)
}
