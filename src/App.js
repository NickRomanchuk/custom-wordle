import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WordleBlock } from './components/wordle-block/wordle-block';
import { Col, Row } from 'react-bootstrap';
import { Keyboard } from 'components/keyboard/keyboard';
import { useEffect, useState } from 'react';
import { fourLetterWords } from 'constants/constants';
import { Alert } from 'components/alert/alert';
import { endGame } from 'utils/endGame';
import { updateColors } from 'utils/updateColors';

function App() {
  let wordSize = 4
  let numGuesses = 6

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('')

  const [correctWord, setCorrectWord] = useState('')
  const [pressedKey, setPressedKey] = useState('')
  const [guessedWords, setGuessedWords] = useState([''])
  
  useEffect(() => {
    if (correctWord == '') {
      setCorrectWord(fourLetterWords[Math.floor(Math.random()*fourLetterWords.length)])
      setGuessedWords([''])
    }
    console.log("The correct word is:", correctWord)
  },[correctWord])

  useEffect(()=>{
      if (pressedKey == 'del') {
        if (guessedWords[guessedWords.length - 1].length <= 0) {
          setMessage("Nothing to delete!")
          setShowAlert(true)
        } else {
          let guess = guessedWords[guessedWords.length - 1].slice(0, -1) 
          setGuessedWords([...guessedWords.slice(0, -1), guess])
        }
      } else if (pressedKey == 'ent') {
          if (!fourLetterWords.includes(guessedWords[guessedWords.length - 1].toLowerCase())) {
            setMessage("Not in word list!")
            setShowAlert(true)
          } else {
            if (guessedWords[guessedWords.length - 1].toLowerCase() == correctWord) {
              updateColors(guessedWords[guessedWords.length - 1], correctWord, guessedWords.length - 1)
              endGame(true, setMessage, setShowAlert, setCorrectWord)
            } else {
              if (guessedWords.length == numGuesses) {
                updateColors(guessedWords[guessedWords.length - 1], correctWord, guessedWords.length - 1)
                endGame(false, setMessage, setShowAlert, setCorrectWord)
              } else {
                setGuessedWords([...guessedWords, ''])
                updateColors(guessedWords[guessedWords.length - 1], correctWord, guessedWords.length - 1)
              }
            }
          }
      } else {
          if (!(guessedWords[guessedWords.length - 1].length >= wordSize)) {
            let guess = guessedWords[guessedWords.length - 1].concat(pressedKey) 
            setGuessedWords([...guessedWords.slice(0, -1), guess])
          }
      }
      setPressedKey('')
  },[pressedKey])

  return (
    <Row className='d-flex justify-content-center align-items-between' id='app'>
      <Alert 
        setShowAlert={setShowAlert}
        showAlert={showAlert}
        message={message}
      />
      <Row className='d-flex justify-content-center pt-4'>
          <h1 className='title-header'>NICK'S WORDLE</h1>   
      </Row>
      <Row className='d-flex justify-content-center pt-4'>
        <WordleBlock
              columns = {wordSize}
              rows = {numGuesses}
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

export default App;