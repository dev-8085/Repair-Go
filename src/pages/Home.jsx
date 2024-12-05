import React from 'react'
import Header from '../components/pages/Header.jsx';
import SpecialityMenu from '../components/pages/SpecialityMenu.jsx';
import TopTechnician from '../components/pages/TopTechnician.jsx';
import Banner from '../components/Banner.jsx';

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopTechnician/>
      <Banner/>
    </div>
  )
}

export default Home;