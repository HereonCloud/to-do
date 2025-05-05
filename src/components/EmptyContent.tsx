import { ClipboardDocumentCheckIcon } from '@heroicons/react/16/solid';

const EmptyContent = () => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center max-w-[320px] h-[100%]'>
      <ClipboardDocumentCheckIcon
        width={84}
        height={84}
        color='var(--color-yellow)'
      />
      <h1 className='text-[28px] text-center font-semibold'>
        Task is currently empty.
      </h1>
      <p className='text-center'>
        Add a task using the input above and start accomplishing things.
      </p>
    </div>
  );
};

export default EmptyContent;
