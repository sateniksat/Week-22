import { Button } from "react-bootstrap";
import higherOrederComponent from "./withModal";

const ConfirmModal = ({ handleClose, id, deleteRow, ...props }) => {
  return (
    <div className="d-flex gap-4 justify-content-center">
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={() => deleteRow(id, handleClose)}>
        Save Changes
      </Button>
    </div>
  );
};
export default higherOrederComponent(ConfirmModal);
