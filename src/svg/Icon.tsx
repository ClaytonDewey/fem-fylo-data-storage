import { IconClose, IconDocument, IconFolder, Logo, IconUpload } from '.';

const Icon = ({
  name,
}: {
  name: 'close' | 'document' | 'folder' | 'logo' | 'upload';
}) => {
  switch (name) {
    case 'close':
      return <IconClose />;
    case 'document':
      return <IconDocument />;
    case 'folder':
      return <IconFolder />;
    case 'logo':
      return <Logo />;
    case 'upload':
      return <IconUpload />;
    default:
      return null;
  }
};

export default Icon;
