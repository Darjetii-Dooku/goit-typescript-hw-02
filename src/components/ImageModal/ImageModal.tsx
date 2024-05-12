import React, { useState } from "react";
import ReactModal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  modalImg,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalImg && (
          <img src={modalImg.urls.regular} alt={modalImg.alt_description} />
        )}
      </ReactModal>
    </div>
  );
};

export default ImageModal;
