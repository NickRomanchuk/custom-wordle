import { Container, Row } from "react-bootstrap"
import { KeyButton } from "./key-button/key-button";
import "./keyboard.css"
import { keyRows } from "constants/constants";

export function Keyboard (keyboardProps) {
    return (
        <Container className="keyboard-container"> 
            {keyRows.map((keyRow, index)=>
                <Row className="d-flex justify-content-center pt-2 pb-2">
                    {keyRow.map((lett, index)=>(
                        <KeyButton
                            letter={lett}
                            key={index}
                            setPressedKey={keyboardProps.setPressedKey}
                        />)
                    )}
                </Row>
            )}
        </Container>
    )
}