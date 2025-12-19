import { Button } from '.';
import { Icon } from '../svg/';
import { useModal } from '../hooks/useModal';
import { Modal } from '.';

const Header = () => {
  const { isShown, toggle } = useModal();

  const modalContent = (
    <div>
      <p>This is dynamic content passed to the reusable modal component.</p>
      <Button type='button' onClick={toggle} className='btn btn-primary mt-4'>
        Close from inside
      </Button>
    </div>
  );

  return (
    <header className='header'>
      <div className='header__logo'>
        <h1 className='sr-only'>Fylo</h1>
        <Icon name='logo' />
      </div>
      <div className='header__buttons'>
        <Button type='button' className='btn btn-icon'>
          <Icon name='document' />
          <div className='sr-only'>Document</div>
        </Button>

        <Button type='button' className='btn btn-icon'>
          <Icon name='folder' />
          <div className='sr-only'>Folder</div>
        </Button>

        <Button type='button' className='btn btn-icon' onClick={toggle}>
          <Icon name='upload' />
          <div className='sr-only'>Upload</div>
        </Button>
      </div>

      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={modalContent}
        headerText='Modal Header'
      />
    </header>
  );
};
export default Header;
