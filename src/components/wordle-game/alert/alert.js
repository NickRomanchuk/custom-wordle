import { Toast } from "react-bootstrap";
import "./alert.css"
import { ALERT_DELAY } from "constants/constants";

export function Alert(alertProps) {
    return (
        <Toast 
            show={alertProps.showAlert} 
            onClose={() => alertProps.setShowAlert(false)}
            delay={ALERT_DELAY} autohide
            className='alert'
        >
            <Toast.Body>
                {alertProps.message}
            </Toast.Body>
        </Toast>
    );
}