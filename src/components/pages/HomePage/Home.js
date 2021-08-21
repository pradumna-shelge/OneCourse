import React from 'react';
import HeroSection from '../HeroSection.js';
import { homeObjOne,homeObjTwo,homeObjThree} from './Data';


function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      
      
    </>
  );
}

export default Home;