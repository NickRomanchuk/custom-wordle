import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WordleBlock } from './components/wordle-block/wordle-block';
import { Col, Row } from 'react-bootstrap';
import { Keyboard } from 'components/keyboard/keyboard';
import { useEffect, useState } from 'react';
import { fourLetterWords } from 'constants/constants';
import { Alert } from 'components/alert/alert';

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
      var classNames = ["key-correct", "key-maybe", "key-wrong"]

      for (var i = 0; i < classNames.length; i++) {
        var elements = document.getElementsByClassName(classNames[i]);
        var length = elements.length
        for (var j = 0; j < length; j++) {
          elements[0].className="key-button";
        }
      }

      var wordElements = document.querySelectorAll('.cell')
      var length = wordElements.length
      for (var i = 0; i < length; i++) {
        if (wordElements) {
          // @ts-ignore
          wordElements[i].style.backgroundColor = "white";
          // @ts-ignore
          wordElements[i].style.borderColor = "darkgray";
        }
      }

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
            setMessage("Not a word!")
            setShowAlert(true)
          } else {
            if (guessedWords[guessedWords.length - 1].toLowerCase() == correctWord) {
              setMessage("You Win!")
              setShowAlert(true)
              setCorrectWord('')
            } else {
              if (guessedWords.length == numGuesses) {
                setMessage("You lose!")
                setShowAlert(true)
                setCorrectWord('')
              } else {
                setGuessedWords([...guessedWords, ''])
                  for (let i = 0; i < guessedWords[guessedWords.length - 1].length; i++) {
                  var guess = guessedWords[guessedWords.length - 1]

                  if (guess[i].toLowerCase() == correctWord[i]) {
                    document.getElementById(guess[i]).className = "key-correct"
                    document.getElementById((guessedWords.length-1).toString().concat(i.toString())).style.background = 'green'
                    document.getElementById((guessedWords.length-1).toString().concat(i.toString())).style.borderColor = 'black'
                    
                  } else if (correctWord.includes(guess[i].toLowerCase())) {

                    if (document.getElementById(guess[i]).className != "key-correct") {
                      document.getElementById(guess[i]).className = "key-maybe";
                    }
                    document.getElementById((guessedWords.length-1).toString().concat(i.toString())).style.background = 'yellow'
                    document.getElementById((guessedWords.length-1).toString().concat(i.toString())).style.borderColor = 'black'

                  } else {

                    if (document.getElementById(guess[i]).className != "key-correct" &&
                    document.getElementById(guess[i]).className != "key-maybe" ) {
                      document.getElementById(guess[i]).className = "key-wrong";
                    }
                    document.getElementById((guessedWords.length-1).toString().concat(i.toString())).style.background = 'gray'
                    document.getElementById((guessedWords.length-1).toString().concat(i.toString())).style.borderColor = 'black'
                  }
                }
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
          <h1 style={{textAlign:'center', marginBottom:'0px'}}>NICK'S WORDLE</h1>   
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