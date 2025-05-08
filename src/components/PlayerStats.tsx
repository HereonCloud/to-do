import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts';

const PlayerStats = () => {
  return (
    <>
      <div className='w-[100%] max-w-[320px] border-b-2 border-(--color-white)'>
        <h1 className='text-[32px] font-bold'>Cleo</h1>
        <h2 className='text-[18px] font-semibold'>Level: 0</h2>
      </div>
      <RadarChart
        outerRadius={90}
        width={730}
        height={250}
        data={[
          {
            subject: 'Strength',
            A: 120,
            B: 110,
            fullMark: 150,
          },
          {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
          },
          {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
          },
          {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
          },
          {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
          },
          {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
          },
        ]}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey='subject' />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name='Mike'
          dataKey='A'
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.6}
        />
      </RadarChart>
    </>
  );
};

export default PlayerStats;
