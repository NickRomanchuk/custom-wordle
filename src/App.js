// Imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import WordleGame from 'components/wordle-game/wordle-game';
import { Menu } from 'components/menu/menu';
import { DEFAULT_WORD_LEN, DEFULT_NUM_GUESS } from 'constants/constants';

function App() {
  const [showMenu, setShowMenu] = useState(true)                  // boolean to show menu selection of wrod size and num guesses
  const [wordLength, setWordLength] = useState(DEFAULT_WORD_LEN)  // int to change the length of the word
  const [numGuesses, setNumGuesses] = useState(DEFULT_NUM_GUESS)  // int to change the number of guesses allowed

  return (
    <div className='app'>
      <Menu 
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        wordLength={wordLength}
        setWordLength={setWordLength}
        numGuesses={numGuesses}
        setNumGuesses={setNumGuesses}
      /> 
      <WordleGame
        newGame={!showMenu}
        setShowMenu={setShowMenu}
        wordLength={wordLength}
        numGuesses={numGuesses}
      />
    </div>
  );
}

export default App;