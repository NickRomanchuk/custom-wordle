import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import "./menu.css"
import { LOWEST_WORD_LENGTH, NUM_GUESSES_DROPDOWN, WORD_LENGTH_DROPDOWN } from "constants/constants";

export function Menu(menuProps) {
    
    return (
        <Modal className="menu-modal" show={menuProps.showMenu}>
            <Modal.Body >
                <Row>
                    <Form className="menu-form"> 
                        <Form.Label className="form-label d-flex justify-content-center">
                            Select Word Length
                        </Form.Label>
                        <Form.Select
                            className='drop-down'
                            defaultValue={menuProps.wordLength}
                            onChange={(e) => (menuProps.setWordLength(Number(e.currentTarget.value)))}>
                                {WORD_LENGTH_DROPDOWN.map((option, index)=>
                                    <option key={index} className="option" value={index + LOWEST_WORD_LENGTH}>{option}</option>
                                )}
                        </Form.Select>
                    </Form>
                </Row>
                <Row className="d-flex justify-content-center pt-3">
                    <Form className="menu-form">
                        <Form.Label className="form-label d-flex justify-content-center">
                            Select Number of Guesses
                        </Form.Label>
                        <Form.Select
                            className='drop-down'
                            defaultValue={menuProps.numGuesses}
                            onChange={(e) => (menuProps.setNumGuesses(Number(e.currentTarget.value)))}>
                                {NUM_GUESSES_DROPDOWN.map((option, index)=>
                                    <option key={index} className="option" value={index+1}>{option}</option>
                                )}
                        </Form.Select>
                    </Form>
                </Row>
                <Row className="d-flex justify-content-center pt-3">
                    <Col className="d-flex justify-content-center" xs={4}>
                        <Button className='ok-button' onClick={()=>menuProps.setShowMenu(false)}>
                            OK
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
      </Modal>
    );
}