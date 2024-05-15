import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddModalItem from "./AddModalItem";
import "./AddModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffffff",
  width: 500,
  height: 600,
  p: 4,
  backdropFilter: "blur(0px)", // 주변 배경 투명화
  borderRadius: "10px",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
};

export default function AddModal(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{ invisible: true }}
    >
      <Box sx={style}>
        <AddModalItem />
      </Box>
    </Modal>
  );
}
