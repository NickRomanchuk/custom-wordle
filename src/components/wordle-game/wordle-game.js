import './wordle-game.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { WordleBlock } from './wordle-block/wordle-block';
import { Keyboard } from './keyboard/keyboard';
import { Alert } from './alert/alert';
import { DELETE_KEY_NAME, ENTER_KEY_NAME} from 'constants/constants';
import { initNewGame } from 'components/wordle-game/utils/initGame';
import { handleDelete, handleEnter, handleLetter } from 'components/wordle-game/utils/buttonHandlers';

function WordleGame(wordleGameProps) {
  const [correctWord, setCorrectWord] = useState('')
  const [pressedKey, setPressedKey] = useState('')
  const [guessedWords, setGuessedWords] = useState([''])
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (wordleGameProps.newGame) {
      initNewGame(wordleGameProps.wordLength, setCorrectWord);
    }
  },[wordleGameProps.newGame])

  useEffect(()=>{
      if (pressedKey == DELETE_KEY_NAME) {
        handleDelete(guessedWords, setMessage, setShowAlert, setGuessedWords)
      } else if (pressedKey == ENTER_KEY_NAME) {
        handleEnter(correctWord, wordleGameProps.wordLength, wordleGameProps.numGuesses, guessedWords, setMessage, setShowAlert, wordleGameProps.setShowMenu, setGuessedWords, setCorrectWord)
      } else {
        handleLetter(pressedKey, guessedWords, wordleGameProps.wordLength, setGuessedWords)
      }
      setPressedKey('')
  },[pressedKey])

  return (
    <Col>
      <Alert 
            setShowAlert={setShowAlert}
            showAlert={showAlert}
            message={message}
      />
      <Row className='pt-4'>
        <h1 className='title-header'>NICK'S WORDLE</h1>   
      </Row>
      <Row className='d-flex justify-content-center pt-4'>
        <WordleBlock
          columns = {wordleGameProps.wordLength}
          rows = {wordleGameProps.numGuesses}
          guessedWords = {guessedWords}
        />
      </Row>
      <Row className='d-flex justify-content-center pt-4 ps-5 pe-5'>
        <Keyboard
          setPressedKey={setPressedKey}
        />
      </Row>
    </Col>
  );
}

export default WordleGame;