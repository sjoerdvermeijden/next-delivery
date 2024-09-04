import Layout from '../components/Layout'

import Restaurants from '../components/Restaurants'

export default function Home() {
  return (
    <Layout>
      <div className='container mx-auto'>
        <Restaurants />
      </div>
    </Layout>
  );
}
