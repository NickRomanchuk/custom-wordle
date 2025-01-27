// Imports
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
import { WordleCell } from './wordle-block/wordle-cell/wordle-cell';

function WordleGame(wordleGameProps) {
  const [correctWord, setCorrectWord] = useState('')      // state variable for the correct word we are tyring to guess
  const [pressedKey, setPressedKey] = useState('')        // state variable to track the most recent button pressed
  const [guessedWords, setGuessedWords] = useState([''])  // state variable to keep a list of all guessed words
  const [showAlert, setShowAlert] = useState(false)       // state variable to display helpful message alerts
  const [message, setMessage] = useState('')              // state variable for what message to show in the alert

  function handleKeyDown(event) {
    if (!wordleGameProps.newGame) return;
    
    if (event.key === "Enter") {
      setPressedKey(ENTER_KEY_NAME);
    } else if (event.key === "Backspace") {
      setPressedKey(DELETE_KEY_NAME);
    } else if (event.keyCode >= 65 && event.keyCode <= 90){
      setPressedKey(event.key.toUpperCase())
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // useEffect for whenever the newGame variable is updated
  useEffect(() => {
    if (wordleGameProps.newGame) {                                              // If new game is true...
      initNewGame(wordleGameProps.wordLength, setCorrectWord, setGuessedWords); // we initialize a new game (e.g. randomly select a new correct word, and reset guessed words)
    }
  },[wordleGameProps.newGame])

  // useEffect for whenever a key is pressed
  useEffect(()=>{
      if (pressedKey == DELETE_KEY_NAME) {                                       // if delete key then call the handle delete function
        handleDelete(guessedWords, setMessage, setShowAlert, setGuessedWords)
      } else if (pressedKey == ENTER_KEY_NAME) {                                 // if enter key then call the handle enter function
        handleEnter(correctWord, wordleGameProps.wordLength, wordleGameProps.numGuesses, guessedWords, setMessage, setShowAlert, wordleGameProps.setShowMenu, setGuessedWords)
      } else {                                                                  // if any other key (i.e. a letter) then call the handle letter function
        handleLetter(pressedKey, guessedWords, wordleGameProps.wordLength, setGuessedWords)
      }
      setPressedKey('')                                                         // reset the pressed key to empty (this allows double clicks to be registered)
  },[pressedKey])

  let columns = Array.from(Array(wordleGameProps.wordLength).keys())

  return (
    <div className='wordle-game'>
      <Alert 
            setShowAlert={setShowAlert}
            showAlert={showAlert}
            message={message}
      />
      <Row className='wordle-row'>
        <Col></Col>
        <WordleBlock
            columns = {wordleGameProps.wordLength}
            rows = {wordleGameProps.numGuesses}
            guessedWords = {guessedWords}
          />
        <Col className='p-3 d-flex flex-column justify-content-center'>
          <Row className='pb-2 m-0'>
            <h2 className='title-header'>ANSWER</h2>   
          </Row>
          <Row className="pb-5 m-0">
            {columns.map((column, colIndex)=>(
              <WordleCell
                letter={""}
                className={`solution ${column}`}
                index={`solution-${column}`}
                key={colIndex}
              />
            ))}
          </Row>
        </Col>
      </Row>
      <Row className='fullKeyboard'>
        <Keyboard
          setPressedKey={setPressedKey}
        />
      </Row>
    </div >
  );
}

export default WordleGame;