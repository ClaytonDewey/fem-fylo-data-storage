import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '.';
import { Icon } from '../svg';

interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: ReactNode;
  headerText?: string;
}

const ANIMATION_DURATION = 300; // ms (match CSS)

const Modal: React.FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const [isMounted, setIsMounted] = useState(isShown);
  const [isEntering, setIsEntering] = useState(false);

  // Handle mount / unmount timing
  useEffect(() => {
    if (isShown) {
      setIsMounted(true);

      requestAnimationFrame(() => {
        setIsEntering(true);
      });
    } else {
      setIsEntering(false);

      const timeout = setTimeout(() => {
        setIsMounted(false);
      }, ANIMATION_DURATION);

      return () => clearTimeout(timeout);
    }
  }, [isShown]);

  // Escape key & body scroll
  useEffect(() => {
    if (!isShown) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') hide();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isShown, hide]);

  if (!isMounted) return null;

  const stateClass = isEntering ? 'modal-enter' : 'modal-exit';

  return ReactDOM.createPortal(
    <div className={`modal-backdrop ${stateClass}`} onClick={hide}>
      <div
        className='modal-overlay'
        role='dialog'
        aria-modal
        onClick={(e) => e.stopPropagation()}>
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
    </div>,
    document.body
  );
};

export default Modal;
