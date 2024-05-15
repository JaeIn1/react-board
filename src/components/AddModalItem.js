const AddModalItem = () => {
  return (
    <>
      <div className="modal_header">Add Item</div>
      <div className="modal_item_id">
        <span>ID : </span>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          className="modal_item_input"
        />
      </div>
    </>
  );
};
export default AddModalItem;
