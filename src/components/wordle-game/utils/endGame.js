import { END_GAME_PAUSE, LOSE_MESSAGE, WIN_MESSAGE } from "constants/constants";

export function endGame(win, setMessage, setShowAlert, setShowMenu, setGuessedWords, setCorrectWord) {
    if (win)
        setMessage(WIN_MESSAGE)
    else {
        setMessage(LOSE_MESSAGE)
    }
    
    setShowAlert(true)
    setTimeout(()=>{setCorrectWord(''); setGuessedWords(['']); setShowMenu(true); resetColors()}, END_GAME_PAUSE)
}

function resetColors() {
    var classNames = ["key-correct", "key-maybe", "key-wrong"]
    for (var i = 0; i < classNames.length; i++) {
        var elements = document.getElementsByClassName(classNames[i]);
        var length = elements.length
        for (var j = 0; j < length; j++) {
            elements[0].className="key-button";
        }
    }

    classNames = ["cell-correct", "cell-maybe", "cell-wrong"]
    for (i = 0; i < classNames.length; i++) {
        elements = document.getElementsByClassName(classNames[i]);
        length = elements.length
        for (j = 0; j < length; j++) {
            elements[0].className="cell form-control";
        }
    }
}