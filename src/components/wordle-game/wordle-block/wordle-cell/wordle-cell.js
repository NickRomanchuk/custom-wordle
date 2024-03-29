import { useEffect, useState } from 'react';
import './wordle-cell.css'
import { Col, Form } from "react-bootstrap";


export function WordleCell(cellProps) {
    const [hasLetter, setHasLetter] = useState(false)

    useEffect (()=> {
        if (cellProps.letter != ' ') {
            setHasLetter(true)
        } else {
            setHasLetter(false)
        }
    },[cellProps])

    return(
        <Col className='d-flex justify-content-center ps-1 pe-1'>
            <Form.Control
                className='cell'
                id={cellProps.index}
                readOnly
                style={hasLetter ? {borderColor: 'black'} : {borderColor: 'darkgray'}}
                value={cellProps.letter}
            />
        </Col>
    )
}