import { Container, Row } from "react-bootstrap"
import { KeyButton } from "./key-button/key-button";
import "./keyboard.css"
import { keyRows } from "constants/constants";

export function Keyboard (keyboardProps) {
return (
    <Container className="keyboard-container">
        <Row className="d-flex justify-content-center pt-2 pb-2">
            {keyRows[0].map((lett, index)=>(
                <KeyButton
                    letter={lett}
                    key={index}
                    setPressedKey={keyboardProps.setPressedKey}
                />)
            )}
        </Row>
        <Row className="d-flex justify-content-center">
            {keyRows[1].map((lett, index)=>(
                <KeyButton
                    letter={lett}
                    key={index}
                    setPressedKey={keyboardProps.setPressedKey}
                />)
            )}
        </Row>
        <Row className="d-flex justify-content-center pt-2 pb-2">
            {keyRows[2].map((lett, index)=>(
                <KeyButton
                    letter={lett}
                    key={index}
                    setPressedKey={keyboardProps.setPressedKey}
                />)
            )}
        </Row>
    </Container>
)}