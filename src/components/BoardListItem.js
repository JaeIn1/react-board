import "./BoardListItem.css";
import CreateIcon from "@mui/icons-material/Create";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const BoardListItem = (props) => {
  console.log(props);
  return (
    <li className="board_list_item">
      <span>{props.item.id}</span>
      <span>{props.item.title}</span>
      <span>{props.item.userId}</span>
      <span>
        <CreateIcon className="setting_icon" />
        <RemoveCircleOutlineIcon className="setting_icon" />
      </span>
    </li>
  );
};
export default BoardListItem;
