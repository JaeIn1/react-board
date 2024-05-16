import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import "./AddModal.css";
import { useState } from "react";

export default function UpdateModal(props) {
  const [id, setId] = useState(props.item.id);
  const [title, setTitle] = useState(props.item.title);
  const [body, setBody] = useState(props.item.body);
  const [userId, setUserId] = useState(props.item.userId);

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
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your ID"
                value={id}
                onChange={onChangeId}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your Title"
                value={title}
                onChange={onChangeTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your User Id"
                value={userId}
                onChange={onChangeUserId}
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
                value={body}
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
            onClick={props.handleOk({
              id,
              title,
              body,
              userId,
              uuid: props.item.id,
            })}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
