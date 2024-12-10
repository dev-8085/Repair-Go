import React from 'react'
import Header from '../components/Header.jsx';
import SpecialityMenu from '../components/SpecialityMenu.jsx';
import TopTechnician from '../components/TopTechnician.jsx';
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