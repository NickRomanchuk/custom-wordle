import { Col, Container, Row } from "react-bootstrap"
import { KeyButton } from "./key-button/key-button";
import "./keyboard.css"
import { getByLabelText } from "@testing-library/react";

export function Keyboard (keyboardProps) {
    const keyRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const keyRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const keyRow3 = ['del', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ent'];


return (
    <Container className="keyboard-container">
        <Row className="d-flex justify-content-center pt-2 pb-2">
            {keyRow1.map((lett, index)=>(
                <KeyButton
                    letter={lett}
                    key={index}
                    setPressedKey={keyboardProps.setPressedKey}
                />)
            )}
        </Row>
        <Row className="d-flex justify-content-center">
            {keyRow2.map((lett, index)=>(
                <KeyButton
                    letter={lett}
                    key={index}
                    setPressedKey={keyboardProps.setPressedKey}
                />)
            )}
        </Row>
        <Row className="d-flex justify-content-center pt-2 pb-2">
            {keyRow3.map((lett, index)=>(
                <KeyButton
                    letter={lett}
                    key={index}
                    setPressedKey={keyboardProps.setPressedKey}
                />)
            )}
        </Row>
    </Container>
)}