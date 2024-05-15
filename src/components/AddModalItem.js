import "./AddModalItem.css";

const AddModalItem = () => {
  return (
    <div className="parent">
      <div>
        <div className="modal_header">Add Item</div>
        <div className="modal_item">
          <span>ID : </span>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            className="modal_item_input"
          />
        </div>
        <div className="modal_item">
          <span>사용자ID : </span>
          <input
            type="text"
            placeholder="사용자 아이디를 입력해주세요"
            className="modal_item_input"
          />
        </div>
        <div className="modal_item modal_title">
          <span>제목 : </span>
          <textarea className="modal_title_textarea"></textarea>
        </div>
      </div>
      <div className="modal_footer_btn_parent ">
        <button className="modal_footer_btn modal_cancel_btn">취소</button>
        <button className="modal_footer_btn modal_ok_btn">등록</button>
      </div>
    </div>
  );
};
export default AddModalItem;
