import { IconDocument, IconFolder, Logo, IconUpload } from '.';

const Icon = ({
  name,
}: {
  name: 'document' | 'folder' | 'logo' | 'upload';
}) => {
  switch (name) {
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
