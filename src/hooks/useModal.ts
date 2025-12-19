import { useState } from 'react';

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const show = () => setIsShown(true);
  const hide = () => setIsShown(false);
  const toggle = () => setIsShown(!isShown);

  return {
    isShown,
    show,
    hide,
    toggle,
  };
};
