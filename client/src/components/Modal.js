import { useNavigate } from "react-router-dom";
import "./styles/Modal.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/");
  }

  return (
    <>
      <div className="backdrop" onClick={closeHandler} />
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
};

export default Modal;
