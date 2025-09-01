import Restaurants from '../components/Restaurants'
import RestaurantFilters from '../components/Filters'

export default function Home() {
  return (
    <div className='flex justify-center py-8 px-4 mx-auto xl:w-[1280px]'>
      <RestaurantFilters />
      <Restaurants />
    </div>
  );
}
