import { Modal,Button } from "react-bootstrap";

const Deletebox = (props) => {
    return ( 
        <Modal.Dialog
        show="false"
        onHide="true"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title style={{color: "black"}}>Delete Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p style={{color: "black"}}>Are you sure you want to delete this data?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" onHide={props.close}>Yes</Button>
                <Button variant="danger" onHide={props.close}>No</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
}
 
export default Deletebox;