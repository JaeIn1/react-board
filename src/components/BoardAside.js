import "./BoardAside.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FacebookIcon from "@mui/icons-material/Facebook";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

const BoardAside = () => {
  return (
    <div className="board_aside">
      <div className="icon_div_parent">
        <div className="icon_div">
          <MenuBookIcon className="board_icon" />
          <span>Board</span>
        </div>
        <div className="icon_div">
          <BookmarkRemoveIcon className="board_icon" />
          <span>Blog</span>
        </div>
        <div className="icon_div">
          <FacebookIcon className="board_icon" />
          <span>FaceBook</span>
        </div>
      </div>
    </div>
  );
};

export default BoardAside;
