export function endGame(win, setMessage, setShowAlert, setShowMenu, setGuessedWords, setNewGame) {
    if (win)
        setMessage("You Win!")
    else {
        setMessage("You Lose!")
    }
    
    setShowAlert(true)
    setTimeout(()=>{setNewGame(true); setGuessedWords(['']); setShowMenu(true); resetColors()}, 2000)
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

    var classNames = ["cell-correct", "cell-maybe", "cell-wrong"]
    for (var i = 0; i < classNames.length; i++) {
        var elements = document.getElementsByClassName(classNames[i]);
        var length = elements.length
        for (var j = 0; j < length; j++) {
            elements[0].className="cell form-control";
        }
    }
}