import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '.';
import { Icon } from '../svg';

interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: ReactNode;
  headerText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hide();
      }
    };
    if (isShown) {
      document.body.style.overflow = 'hiddent';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isShown, hide]);

  const modal = (
    <>
      {/* Backdrop */}
      <div className='modal-backdrop' onClick={hide}>
        {/* Modal Overlay */}
        <div
          className='modal-overlay'
          aria-modal
          aria-hidden={!isShown}
          role='dialog'>
          <div className='modal-wrapper'>
            <div className='modal-header'>
              <h3>{headerText}</h3>
              <Button
                type='button'
                className='btn btn-close'
                onClick={hide}
                aria-label='Close Modal'>
                <Icon name='close' />
              </Button>
            </div>
            <div className='modal-body'>{modalContent}</div>
          </div>
        </div>
      </div>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
