import {useState} from 'react'
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'

const CheckoutModal = (props) => {

    const [received, setReceived] = useState(0);

    const clickHandler = () => {
        setReceived(0);
        props.toggle();
    }

    return (
        <Modal show={props.show}>
            <Modal.Header>
                <h2>Cash</h2>
            </Modal.Header>
            <Modal.Body>
                <h3>Enter Amount Received</h3>
                <br/>
                <h5>Total: ${props.value}</h5>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        <h5>Received: $</h5>
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="number" value = {received} placeholder="Enter Amount.."
                            onChange = {(event) => {
                            setReceived(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>
                <h5>Change: ${received - props.value}</h5>
            </Modal.Body>

            <Modal.Footer className="justify-content-center">
                <Button variant="primary" size="lg">
                    Confirm
                </Button>
                <Button variant="danger" size="lg" onClick={clickHandler}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckoutModal