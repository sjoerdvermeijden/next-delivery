import Layout from '../components/Layout'

import Restaurants from '../components/Restaurants'
import Filter from '../components/Filter'

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col grow'>
        <Filter />
        <div className='container mx-auto'>
          <Restaurants />
        </div>
      </div>
    </Layout>
  );
}
