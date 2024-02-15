import React from 'react'
import { useState } from 'react'
import useConfirmation from './useConfirmation';
import useModal from './useModal';

const Progress = () => {
    const { openModal, closeModal , isModalOpen, modalContent } = useConfirmation();

  return (
    <div>

      <button onClick={openModal}>Leave Page</button>

      {isModalOpen && modalContent}
    </div>
  )
}

export default Progress