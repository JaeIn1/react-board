import "./BoardMain.css";
import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
import BoardAside from "./BoardAside";

const BoardMain = () => {
  return (
    <div className="parent">
      <BoardHeader />
      <div className="board_body">
        <BoardAside />
        <div className="board_list">
          <BoardBody />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BoardMain;
