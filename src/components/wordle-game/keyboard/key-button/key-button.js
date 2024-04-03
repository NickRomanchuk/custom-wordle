import { Button, Col } from "react-bootstrap";
import "./key-button.css"
import { DELETE_KEY_NAME, ENTER_KEY_NAME } from "constants/constants";

export function KeyButton(keyButtonProps){
    return(
       <Col className="key-column" xs={(keyButtonProps.letter == DELETE_KEY_NAME || keyButtonProps.letter == ENTER_KEY_NAME) ? 2 : 1}>
            <Button 
                onClick={() => keyButtonProps.setPressedKey(keyButtonProps.letter)}
                className="key-button"
                id={keyButtonProps.letter}
            >
                {keyButtonProps.letter}
            </Button>
        </Col>
    )
}