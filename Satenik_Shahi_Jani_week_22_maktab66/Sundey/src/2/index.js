import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ConfirmModal from "./confirmModal";
import withAjax from "../1/withAjax";
import axios from "axios";

function Practice2({ data, err, loaded, deleteRow, ...props }) {
  const [show, setShow] = useState(false);
  const [deletedItem, setDeletedItem] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(deletedItem);
  const handleCallModalAndDelete = (item) => {
    setDeletedItem(item.id);
    handleShow();
  };

  return (
    <div>
      <div className="container-fluid">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Button
                    onClick={() => handleCallModalAndDelete(item)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ConfirmModal
        title="Are you sure?"
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        id={deletedItem}
        deleteRow={deleteRow}
       
      />
    </div>
  );
}
export default withAjax(Practice2, "customers");
