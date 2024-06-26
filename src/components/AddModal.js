import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import "./AddModal.css";
import { useState } from "react";

export default function AddModal(props) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setBody(e.target.value);
  };
  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const isFormValid = () => {
    return id && title && body && userId;
  };

  const handleSaveChanges = () => {
    if (isFormValid()) {
      props.handleOk({ id, title, body, userId, uuid: uuidv4() });
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your ID"
                onChange={onChangeId}
                value={id}
                isInvalid={!id}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your Title"
                onChange={onChangeTitle}
                isInvalid={!title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your User Id"
                onChange={onChangeUserId}
                isInvalid={!userId}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={onChangeContent}
                isInvalid={!body}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSaveChanges} // 수정된 부분
            disabled={!isFormValid()} // 모든 필드가 입력되었을 때만 버튼 활성화
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
