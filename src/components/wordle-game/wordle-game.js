import './wordle-game.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { endGame } from 'utils/endGame';
import { updateColors } from 'utils/updateColors';
import { WordleBlock } from './wordle-block/wordle-block';
import { Keyboard } from './keyboard/keyboard';

function WordleGame(wordleGameProps) {
  const [correctWord, setCorrectWord] = useState('')
  const [pressedKey, setPressedKey] = useState('')
  const [guessedWords, setGuessedWords] = useState([''])
  const [newGame, setNewGame] = useState(true)
  
  useEffect(() => {
    setCorrectWord(wordleGameProps.wordList[Math.floor(Math.random()*wordleGameProps.wordList.length)])
    setNewGame(false)
  },[newGame, wordleGameProps.wordLength])
  console.log("The correct word is:", correctWord)

  useEffect(()=>{
      if (pressedKey == 'del') {
        if (guessedWords[guessedWords.length - 1].length <= 0) {
          wordleGameProps.setMessage("Nothing to delete!")
          wordleGameProps.setShowAlert(true)
        } else {
          let guess = guessedWords[guessedWords.length - 1].slice(0, -1) 
          setGuessedWords([...guessedWords.slice(0, -1), guess])
        }
      } else if (pressedKey == 'ent') {
          if (!wordleGameProps.wordList.includes(guessedWords[guessedWords.length - 1].toLowerCase())) {
            console.log("guessed word:", guessedWords[guessedWords.length - 1].toLowerCase())
            console.log(wordleGameProps.wordList.includes(guessedWords[guessedWords.length - 1].toLowerCase()))
            wordleGameProps.setMessage("Not in word list!")
            wordleGameProps.setShowAlert(true)
          } else {
            if (guessedWords[guessedWords.length - 1].toLowerCase() == correctWord) {
              updateColors(guessedWords[guessedWords.length - 1], correctWord, guessedWords.length - 1)
              endGame(true, wordleGameProps.setMessage, wordleGameProps.setShowAlert, wordleGameProps.setShowMenu, setGuessedWords, setNewGame)
            } else {
              if (guessedWords.length == wordleGameProps.numGuesses) {
                updateColors(guessedWords[guessedWords.length - 1], correctWord, guessedWords.length - 1)
                endGame(false, wordleGameProps.setMessage, wordleGameProps.setShowAlert, wordleGameProps.setShowMenu, setGuessedWords, setNewGame)
              } else {
                setGuessedWords([...guessedWords, ''])
                updateColors(guessedWords[guessedWords.length - 1], correctWord, guessedWords.length - 1)
              }
            }
          }
      } else {
          if (!(guessedWords[guessedWords.length - 1].length >= wordleGameProps.wordLength)) {
            let guess = guessedWords[guessedWords.length - 1].concat(pressedKey) 
            setGuessedWords([...guessedWords.slice(0, -1), guess])
          }
      }
      setPressedKey('')
  },[pressedKey])

  return (
    <Row className='d-flex justify-content-center align-items-between' id='app'>
      <Row className='d-flex justify-content-center pt-4'>
          <h1 className='title-header'>NICK'S WORDLE</h1>   
      </Row>
      <Row className='d-flex justify-content-center pt-4'>
        <WordleBlock
              columns = {wordleGameProps.wordLength}
              rows = {wordleGameProps.numGuesses}
              guessedWords = {guessedWords}/>
      </Row>
      <Row className='d-flex justify-content-center pt-4'>
        <Col className='d-flex align-items-center' xs={10}>
          <Keyboard
            setPressedKey={setPressedKey}
          />
        </Col>
      </Row>
    </Row>
  );
}

export default WordleGame;