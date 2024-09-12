import Restaurants from '../components/Restaurants'
import Filter from '../components/Filter'

export default function Home() {
  return (
    <div className='flex flex-col grow'>
      <Filter />
      <div className='container mx-auto'>
        <Restaurants />
      </div>
    </div>
  );
}
