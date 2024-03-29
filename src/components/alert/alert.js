import { Toast } from "react-bootstrap";
import "./alert.css"

export function Alert(alertProps) {

    return (
        <Toast 
            show={alertProps.showAlert} 
            onClose={() => alertProps.setShowAlert(false)}
            delay={1000} autohide
            className='alert'>
          <Toast.Body>{alertProps.message}</Toast.Body>
        </Toast>
    );
}