import React from 'react';
import useCampaigns from '../../hooks/useCampaigns';
import Campaign from './Campaign';

const CampaignSection = () => {
   const [campaigns] = useCampaigns()
   
   return (
      <div className="campaign-section">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>Our Campaigns</h2>
                     <p className="mb-0">We regularly organize charitable campaigns aimed at changing the lives of people around the world.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {
                  campaigns.slice(0, 3).map(campaign => <Campaign 
                     campaign={campaign} 
                     key={campaign.id} ></Campaign> )
               }
            </div>
         </div>
      </div>
   );
};

export default CampaignSection;