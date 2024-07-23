import { Container, Row } from "react-bootstrap"
import { KeyButton } from "./key-button/key-button";
import "./keyboard.css"
import { keyRows } from "constants/constants";

export function Keyboard (keyboardProps) {

    return (
        <Container className="keyboard-container" > 
            {keyRows.map((keyRow, index)=>
                <Row key={index} className={"keyboard-row d-flex justify-content-center".concat((index == 0) ? " pt-2 pb-1" : "").concat((index == keyRows.length - 1) ? " pt-1 pb-2" : " pt-1 pb-1")}>
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