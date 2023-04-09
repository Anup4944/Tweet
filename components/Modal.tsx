import React from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
}

const Modal = () => {
  return <div>Modal</div>;
};

export default Modal;
