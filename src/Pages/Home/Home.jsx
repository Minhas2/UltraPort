import React from 'react'

import HeroUltra from '../../componets/Home/UltraPort/HeroUltra'

import Categories from '../../componets/Home/Categories/Categories'
import Advantages from '../../componets/Home/Advantages/Advantages'
import Review from '../../componets/Home/Review/Review'
import PcProductCarsouel from '../../componets/Home/PcProductCarsouel/PcProductCarsouel';

import Influencers from '../../componets/Home/Influencers/Influencers';
import HomeCarosuel from '../../componets/Home/Home-carsoeul/HomeCarosuel'
import Passion from '../../componets/Home/Passion/Passion'
import HomeProdcutCarsouel from '../../componets/Home/Home-Product-Carsouel/HomeProdcutCarsouel'

const Home = () => {
  return (
    <>


        <HomeCarosuel/>
        <HeroUltra/>
        <PcProductCarsouel/>
        <HomeProdcutCarsouel/>
        <Categories/>
        <Passion/>
        <Review/>
        <Influencers />
        <Advantages/>
        
       

    </>
  )
}

export default Home