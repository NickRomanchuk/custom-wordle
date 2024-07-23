// @ts-nocheck
import { END_GAME_PAUSE, LOSE_MESSAGE, WIN_MESSAGE } from "constants/constants";

export function endGame(win, setMessage, setShowAlert, setShowMenu, setGuessedWords, correctWord) {
    if (win) {                   // If game ended because of win...
        setMessage(WIN_MESSAGE)  // Set message to win message
    } else {
        setMessage(LOSE_MESSAGE) // Set message to lose message
        showSolution(correctWord)
    }
    setShowAlert(true)           // Display the end game alert

    setTimeout(()=>{resetSolution(); setGuessedWords(['']); setShowMenu(true); resetColors();}, END_GAME_PAUSE) // reset the guessed words, display menu and reset colors, after pause
}

function resetColors() {
    var keyClassNames = ["key-correct", "key-maybe", "key-wrong"]       // define the classnames for the keys
    var cellClassNames = ["cell-correct", "cell-maybe", "cell-wrong"]   // define the classnames for the cells

    resetClassNames(keyClassNames, "key-button")                        // reset all the key classnames to key-button
    resetClassNames(cellClassNames, "cell form-control")                // reset all the key classnames to cell form-control
}

function resetClassNames(oldClassNames, newClassName) {
    for (var className of oldClassNames) {                              // for each classname in provided list of classnames
        var elements = document.getElementsByClassName(className);      // get all the elements with that classname
       
        var length = elements.length        
        for (var i = 0; i < length; i++) {                              // loop over each of those elements
            elements[0].className = newClassName;                       // set the classname to the provided new classname
        }
    }
}

function showSolution(correctWord) {
    for (let i = 0; i < correctWord.length; i++) {
        document.getElementById(`solution-${i}`).value = correctWord.toUpperCase().charAt(i);
    }
}

function resetSolution() {
    let i = 0;

    while (true) {
        let solution_element = document.getElementById(`solution-${i}`);

        if (solution_element) {
            solution_element.value =  "";
            i = i + 1;
        } else {
            break;
        }
    }
}