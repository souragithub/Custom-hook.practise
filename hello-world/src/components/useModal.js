import React, { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const Modal = ({ isOpen, closeModal, children }) => {
    return (
      isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Are you sure you want to leave the page ?</h2>
            <button onClick={closeModal}>Cancel</button>
            <button >Leave</button>
          </div>
        </div>
      )
    );
  };

  return {
    Modal,
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
