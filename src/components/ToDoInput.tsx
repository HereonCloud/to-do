import { PlusCircleIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

export interface ToDoInputProps {
  addToDo: (i: string) => void;
}

const ToDoInput = (p: ToDoInputProps) => {
  const [newToDo, setNewToDo] = useState<string>('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        p.addToDo(newToDo);
        setNewToDo('');
      }}
      className='flex gap-2 justify-center items-center w-[100%]'
    >
      <input
        className='rounded-4 w-[100%]'
        required
        type='text'
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />

      <button type='submit'>
        <PlusCircleIcon height={36} width={36} color='var(--color-yellow)' />
      </button>
      <button className='text-(--color-black) bg-(--color-white) p-1.5 rounded-sm font-medium w-max'>
        Generate random task
      </button>
    </form>
  );
};

export default ToDoInput;
