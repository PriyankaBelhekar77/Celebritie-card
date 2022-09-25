import { AiOutlineClose } from "react-icons/ai";
function Modal({ onShow, handleDelete, message, width, height, toogleModal }) {
  return onShow ? (
    <div className="modal-overlay">
      <div className="modal-conatiner">
        <div className="modal-header">
          <button className="icon-btn" onClick={onShow}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="modal-body">{message}</div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={onShow}>
            Cancel
          </button>
          <button className="modal-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
