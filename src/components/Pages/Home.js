import React from 'react';
import About from './About';
import CampaignSection from './CampaignSection';
import Feature from './Feature';
import HomeBanner from './HomeBanner';

const Home = () => {
   return (
      <>
         <HomeBanner></HomeBanner>
         <Feature></Feature>
         <About></About>
         <CampaignSection></CampaignSection>
      </>
   );
};

export default Home;