import { Button } from '.';
import { Icon } from '../svg/';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
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

        <Button type='button' className='btn btn-icon'>
          <Icon name='upload' />
          <div className='sr-only'>Upload</div>
        </Button>
      </div>
    </header>
  );
};
export default Header;
