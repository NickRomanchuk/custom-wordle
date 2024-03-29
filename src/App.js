import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Alert } from 'components/alert/alert';
import WordleGame from 'components/wordle-game/wordle-game';
import { Menu } from 'components/menu/menu';
import { wordLists } from 'constants/constants';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('')
  const [showMenu, setShowMenu] = useState(true)
  const [wordLength, setWordLength] = useState(4)
  const [numGuesses, setNumGuesses] = useState(6)
  
  var wordList = wordLists[wordLength - 4]
  useEffect(() => {
    wordList = wordLists[wordLength - 4]
  },[wordLength])
  console.log(wordList)

  return (
    <div className='d-flex justify-content-center'>
        <Alert 
          setShowAlert={setShowAlert}
          showAlert={showAlert}
          message={message}
        />
        <Menu 
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          wordLength={wordLength}
          setWordLength={setWordLength}
          numGuesses={numGuesses}
          setNumGuesses={setNumGuesses}
        /> 
        <WordleGame
          setMessage={setMessage}
          setShowAlert={setShowAlert}
          setShowMenu={setShowMenu}
          wordLength={wordLength}
          numGuesses={numGuesses}
          wordList={wordList}
        />
    </div>
  );
}

export default App;