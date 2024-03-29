import { Button, Col } from "react-bootstrap";
import "./key-button.css"

export function KeyButton(keyButtonProps){
    return(
        <Col className="key-column ps-1 pe-1" xs={1}>
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