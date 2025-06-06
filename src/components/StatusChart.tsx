import { useCallback, useEffect, useState } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { STATUS, ToDoListT } from '../utils/constants';

const StatusChart = () => {
  const [data, setData] = useState<ToDoListT[]>(
    JSON.parse(localStorage.getItem('toDoList') as string) ?? []
  );

  useEffect(() => {
    window.addEventListener('storage', () => {
      setData(JSON.parse(localStorage.getItem('toDoList') as string) || []);
    });
  }, []);

  const getChartData = useCallback(() => {
    if (data.length > 0) {
      const isDone = data.filter((d) => d.status === STATUS.DONE);
      const isPending = data.filter((d) => d.status === STATUS.PENDING);
      const isOngoing = data.filter((d) => d.status === STATUS.ONGOING);
      const isStuck = data.filter((d) => d.status === STATUS.STUCK);

      return [
        { name: 'Done', value: isDone.length, fill: 'var(--color-green)' },
        { name: 'Stuck', value: isStuck.length, fill: 'var(--color-red)' },
        {
          name: 'Working on it',
          value: isOngoing.length,
          fill: 'var(--color-blue)',
        },
        {
          name: 'Not yet started',
          value: isPending.length,
          fill: 'var(--color-yellow)',
        },
        { name: 'No tasks yet', value: 0, fill: '#DDDDDD' },
      ];
    }

    return [
      { name: 'Done', value: 0, fill: 'var(--color-green)' },
      { name: 'Stuck', value: 0, fill: 'var(--color-red)' },
      {
        name: 'Working on it',
        value: 0,
        fill: 'var(--color-blue)',
      },
      {
        name: 'Not yet started',
        value: 0,
        fill: 'var(--color-yellow)',
      },
      { name: 'No task yet', value: 100, fill: '#DDDDDD' },
    ];
  }, [data]);

  return (
    <>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <div className='w-[100%] flex justify-center'>
          <PieChart
            width={320}
            height={200}
            className='border-y-2 border-amber-50 '
          >
            <Pie
              data={getChartData()}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              innerRadius={50}
              outerRadius={70}
            />
            <Legend
              iconSize={10}
              layout='vertical'
              verticalAlign='middle'
              align='right'
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#242424',
                borderRadius: '4px',
                padding: '4px',
              }}
              itemStyle={{
                backgroundColor: '#242424;',
              }}
            />
          </PieChart>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default StatusChart;
