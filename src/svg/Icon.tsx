import { IconDocument, IconFolder, Logo, IconUpload } from '.';

const Icon = ({
  type,
}: {
  type: 'document' | 'folder' | 'logo' | 'upload';
}) => {
  switch (type) {
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
