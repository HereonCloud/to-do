import { STATUS, ToDoListT } from '../utils/constants';
import ToDoInput from './../components/ToDoInput';
import ToDoListTable from './../components/ToDoListTable';
import { useState } from 'react';
const ToDoList = () => {
  const [toDoList, setToDoList] = useState<ToDoListT[]>(
    localStorage.getItem('toDoList')
      ? JSON.parse(localStorage.getItem('toDoList') as string)
      : []
  );

  const addToDo = (toDo: string) => {
    const newToDoList = [...toDoList, { toDo: toDo, status: STATUS.PENDING }];
    localStorage.setItem('toDoList', JSON.stringify(newToDoList));
    window.dispatchEvent(new Event('storage'));
    return setToDoList(newToDoList);
  };

  const deleteToDo = (k: number) => {
    const newToDoList = toDoList.filter((_, key) => {
      return key !== k;
    });
    localStorage.setItem('toDoList', JSON.stringify(newToDoList));
    window.dispatchEvent(new Event('storage'));
    setToDoList(newToDoList);
  };

  const toggleToDo = (k: number, status: STATUS) => {
    const newToDoList = toDoList.map((td, key) => {
      return k === key ? { toDo: td.toDo, status: status } : td;
    });
    localStorage.setItem('toDoList', JSON.stringify(newToDoList));
    window.dispatchEvent(new Event('storage'));
    setToDoList(newToDoList);
  };
  return (
    <div className='flex flex-col grow items-center p-[16px] gap-4 border-1 border-(--color-yellow) rounded-xs max-w-[100%] w-[100%]'>
      <ToDoInput addToDo={(i) => addToDo(i)} />
      <ToDoListTable
        data={toDoList}
        deleteToDo={deleteToDo}
        toggleToDo={toggleToDo}
      />
    </div>
  );
};

export default ToDoList;
