import "./BoardHeader.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

const BoardHeader = () => {
  return (
    <div className="header-parent">
      <div className="header_title">Project board</div>
      <div className="header_icon_div">
        <div className="alarm_icon_div">
          <NotificationsIcon className="header_icon" />
          <span className="alarm_icon_color"></span>
        </div>
        <MenuIcon className="header_icon menu_icon" />
      </div>
    </div>
  );
};

export default BoardHeader;
