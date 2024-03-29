import { useEffect, useState } from 'react';
import './wordle-cell.css'
import { Col, Form } from "react-bootstrap";


export function WordleCell(cellProps) {
    return(
        <Col className='d-flex justify-content-center ps-1 pe-1'>
            <Form.Control
                className='cell'
                id={cellProps.index}
                readOnly
                value={cellProps.letter}
                onChange={(e)=>{if (cellProps.letter == ' ') {
                        document.getElementById(cellProps.index).style.borderColor = 'darkgray'
                    } else {
                        document.getElementById(cellProps.index).style.borderColor = 'black'
                    }
                }}
            />
        </Col>
    )
}