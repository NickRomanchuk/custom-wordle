import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import WordleGame from 'components/wordle-game/wordle-game';
import { Menu } from 'components/menu/menu';
import { DEFAULT_WORD_LEN, DEFULT_NUM_GUESS } from 'constants/constants';

function App() {
  const [showMenu, setShowMenu] = useState(true)
  const [wordLength, setWordLength] = useState(DEFAULT_WORD_LEN)
  const [numGuesses, setNumGuesses] = useState(DEFULT_NUM_GUESS)

  return (
    <>
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
    </>
  );
}

export default App;