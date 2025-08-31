import Restaurants from '../components/Restaurants'
import RestaurantFilters from '../components/Filters'

export default function Home() {
  return (
    <div className='flex w-[1280px] py-8 mx-auto'>
      <RestaurantFilters />
      <Restaurants />
    </div>
  );
}
