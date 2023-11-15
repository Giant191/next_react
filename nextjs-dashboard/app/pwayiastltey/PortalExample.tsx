import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '@/app/pwayiastltey/ModalContent';

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="rounded-md border p-2 hover:bg-gray-100">
        下載
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
