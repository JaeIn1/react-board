import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BoardListItem from "./BoardListItem";
import "./BoardBody.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddModal from "./AddModal";

const BoardBody = (props) => {
  const [boardList, setBoardList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOk = (data) => () => {
    setBoardList((prev) => [...prev, data]);
    setShow(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const newArr = resp.data.map((item) => ({
          ...item,
          uuid: uuidv4(),
        }));
        setBoardList(newArr);
        console.log(newArr);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const onClickAddBtn = () => {
    setOpenModal(true);
    setShow(true);
  };
  return (
    <>
      {openModal ? (
        <AddModal
          show={show}
          handleOpen={handleShow}
          handleClose={handleClose}
          handleOk={handleOk}
        />
      ) : (
        ""
      )}
      <div className="body_root">
        <div className="body_parent">
          <div className="body_parent_header">Board List</div>
          <div className="boardItem_div_header">
            <span>아이디</span>
            <span>제목</span>
            <span>내용</span>
            <span>사용자</span>
            <span>설정</span>
          </div>
          <ul className="boardItem_ul">
            {boardList.map((e, i) => (
              <BoardListItem
                item={e}
                key={uuidv4()}
                id={e.uuid}
                setBoardList={setBoardList}
                boardList={boardList}
              />
            ))}
          </ul>
          <span onClick={onClickAddBtn}>
            <AddCircleIcon className="add_btn" />
          </span>
        </div>
      </div>
    </>
  );
};
export default BoardBody;
