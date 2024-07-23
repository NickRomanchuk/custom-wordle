import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import './Login.css'
import { generateClient } from "aws-amplify/api";

function Login({setShowMenu}) {
    const [show, setShow] = useState(true);
    const [createAccount, setCreateAccount] = useState(false);

    const client = generateClient ();
    const todoDetails = {
        name: 'Todo 1',
        description: 'Learn AWS AppSync'
      };

    const handleSubmit = (event) => {
        console.log("hi");
        setShow(false);
    };
    return (
        <Modal show={show} className="loginScreen" centered>
            <h1 className="pt-2" style={{textAlign: 'center'}}>
                Nick's Wordle
            </h1>
            {createAccount ? 
                    <>
                    <Form className="mb-2 d-flex flex-column align-items-center">
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label className="mb-1">Set Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label className="mb-1">Set Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value='' />
                        </Form.Group>
                        <Button className="loginButtons" variant="primary mb-2" type="submit" style={{width: '50%'}}>
                            CREATE ACCOUNT
                        </Button>
                    </Form>
                    <Row className="mb-2">
                        <Col className="mb-2 d-flex justify-content-center">
                            <Button className="loginButtons" variant="primary" type="submit" onClick={() => {setCreateAccount(false)}}>
                                    RETURN TO LOGIN
                            </Button>
                        </Col>
                        <Col className="mb-2 d-flex justify-content-center">
                            <Button className="loginButtons" variant="primary" 
                                    type="submit"
                                    onClick={() => {setShow(false); setShowMenu(true)}}>
                                CONTINUE AS GUEST
                            </Button>
                        </Col>
                    </Row>
                </> 
                : 
                <>
                <Form className="mb-2 d-flex flex-column align-items-center">
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className="mb-1">Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label className="mb-1">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="loginButtons" variant="primary mb-2" type="submit" style={{width: '50%'}}>
                        LOG IN
                    </Button>
                </Form>
                <Row className="mb-2">
                    <Col className="mb-2 d-flex justify-content-center">
                        <Button className="loginButtons" variant="primary" type="submit" onClick={() => setCreateAccount(true)}>
                                CREATE NEW ACCOUNT
                        </Button>
                    </Col>
                    <Col className="mb-2 d-flex justify-content-center">
                        <Button className="loginButtons" variant="primary" 
                                type="submit"
                                onClick={() => {setShow(false); setShowMenu(true)}}>
                            CONTINUE AS GUEST
                        </Button>
                    </Col>
                </Row>
            </>
            }
        </Modal>
    )
}

export default Login;