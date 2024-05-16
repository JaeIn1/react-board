import "./BoardListItem.css";
import CreateIcon from "@mui/icons-material/Create";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";
import UpdateModal from "./UpdateModal";

const BoardListItem = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOk = (data) => () => {
    console.log(data);
    const newList = props.boardList.map((e) => {
      if (e.uuid === props.id) {
        return data;
      }
      return e;
    });
    props.setBoardList(newList);
    setShow(false);
  };

  const onClickUpdateItem = (e) => {
    setOpenModal(true);
    setShow(true);
  };

  const onClickDeleteItem = () => {};
  return (
    <>
      {openModal ? (
        <UpdateModal
          show={show}
          handleOpen={handleShow}
          handleClose={handleClose}
          item={props.item}
          id={props.id}
          handleOk={handleOk}
        />
      ) : (
        ""
      )}
      <li className="board_list_item" id={props.id}>
        <span>{props.item.id}</span>
        <span>{props.item.title}</span>
        <span>{props.item.body}</span>
        <span>{props.item.userId}</span>
        <span>
          <span onClick={onClickUpdateItem}>
            <CreateIcon className="setting_icon" />
          </span>
          <span onClick={onClickDeleteItem}>
            <RemoveCircleOutlineIcon className="setting_icon" />
          </span>
        </span>
      </li>
    </>
  );
};
export default BoardListItem;
