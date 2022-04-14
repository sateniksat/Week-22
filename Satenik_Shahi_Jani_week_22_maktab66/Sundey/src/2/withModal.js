import { Modal, Button } from "react-bootstrap";

const higherOrederComponent = (Component) => {
  return function withModal(props) {
    const { handleClose, show } = props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Component {...props} />
        </Modal.Body>
      </Modal>
    );
  };
};
export default higherOrederComponent;
