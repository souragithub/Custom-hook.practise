import { useState } from 'react';

const useConfirmation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

//   const handleLeave = () => {
//     // Perform the necessary actions when leaving
//     // For example, you can perform navigation or any cleanup logic here

//     // After handling the leave action, close the modal
//     closeModal();
//   };

  const modalContent = (
    <div className="confirmation-modal">
      <p>Are you sure you want to leave the page?</p>
      <button >Leave</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );

  return {
    openModal,
    closeModal,
    isModalOpen,
    modalContent,
  };
};

export default useConfirmation;

