import { Button } from '@heroui/react';

type DownloadButtonProps = {
  cvLink: string;
  title: string;
};

const DownloadButton = ({ cvLink, title }: DownloadButtonProps) => {
  return (
    <Button
      as='a'
      href={cvLink}
      target='_blank'
      rel='noopener noreferrer'
      variant='flat'
      className='flex px-4 py-3 min-w-fit bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white font-semibold rounded-[6px] transition'
    >
      {title}
    </Button>
  );
};

export default DownloadButton;
