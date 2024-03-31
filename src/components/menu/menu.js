import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import "./menu.css"

export function Menu(menuProps) {
    return (
        <Modal className='menu' show={menuProps.showMenu}>
            <Modal.Body>
                <Row>
                    <Form className="menu-form"> 
                        <Form.Label className="form-label d-flex justify-content-center">
                            Select Word Length
                        </Form.Label>
                        <Form.Select
                            className='drop-down'
                            defaultValue={menuProps.wordLength}
                            onChange={(e) => (menuProps.setWordLength(Number(e.currentTarget.value)))}>
                            <option className="option" value={4}>Four Letters</option>
                            <option className="option" value={5}>Five Letters</option>
                            <option className="option" value={6}>Six Letters</option>
                            <option className="option" value={7}>Seven Letters</option>
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
                            <option className="option" value={1}>One</option>
                            <option className="option" value={2}>Two</option>
                            <option className="option" value={3}>Three</option>
                            <option className="option" value={4}>Four</option>
                            <option className="option" value={5}>Five</option>
                            <option className="option" value={6}>Six</option>
                            <option className="option" value={7}>Seven</option>
                            <option className="option" value={8}>Eight</option>
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