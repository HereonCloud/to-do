import { TrashIcon } from '@heroicons/react/16/solid';
import EmptyContent from './EmptyContent';
import { STATUS, ToDoListT } from '../utils/constants';

export interface ToDoListTableProps {
  deleteToDo: (k: number) => void;
  toggleToDo: (k: number, status: STATUS) => void;
  data: ToDoListT[];
}

const ToDoListTable = (p: ToDoListTableProps) => {
  const toggleSelectColor = (status: STATUS) => {
    switch (status) {
      case STATUS.DONE:
        return 'bg-(--color-green)';
      case STATUS.ONGOING:
        return 'bg-(--color-blue)';
      case STATUS.STUCK:
        return 'bg-(--color-red)';
      default:
        return 'bg-(--color-yellow)';
    }
  };

  return (
    <>
      {p.data.length === 0 ? (
        <div className='h-[100%]'>
          <EmptyContent />
        </div>
      ) : (
        <div className='overflow-y-auto overflow-x-hidden wrap-break-word whitespace-nowrap w-[100%] scroll-smooth'>
          <table className='w-[100%] h-[100%] border-(--color-yellow) border-1 rounded-md'>
            <thead>
              <tr>
                <td className='w-[100%] text-(--color-yellow) text-[32px] font-semibold'>
                  To do list
                </td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody className='align-top'>
              {p.data.map((d, k) => {
                return (
                  <tr key={k} className='border-(--color-yellow) border-1'>
                    <td
                      className={`wrap-break-word whitespace-normal overflow-hidden text-(--color-yellow) text-[16px] max-w-[320px]`}
                    >
                      {d.toDo}
                    </td>
                    <td>
                      <select
                        className={`${toggleSelectColor(
                          d.status
                        )} rounded-md p-1 font-semibold text-(--color-white) text-shadow-lg text-shadow-(--color-gray)`}
                        value={d.status}
                        onChange={(e) => {
                          p.toggleToDo(k, e.target.value as STATUS);
                        }}
                      >
                        <option value={STATUS.PENDING}>{STATUS.PENDING}</option>
                        <option value={STATUS.ONGOING}>{STATUS.ONGOING}</option>
                        <option value={STATUS.STUCK}>{STATUS.STUCK}</option>
                        <option value={STATUS.DONE}>{STATUS.DONE}</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => p.deleteToDo(k)}>
                        <TrashIcon
                          width={28}
                          height={28}
                          color='var(--color-red)'
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ToDoListTable;
