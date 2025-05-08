import PlayerStats from '../components/PlayerStats';
import StatusChart from '../components/StatusChart';

const Profile = () => {
  return (
    <div className='flex flex-col w-[100%] items-center h-[100%] lg:max-w-[320px]'>
      <PlayerStats />
      <StatusChart />
    </div>
  );
};

export default Profile;
