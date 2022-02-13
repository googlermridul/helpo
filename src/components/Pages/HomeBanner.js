import React from 'react';
import banner from '../../images/home-banner.jpg'

const HomeBanner = () => {
   return (
      <div className="home-banner">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="text-box">
                     <h1>Give a helping <br />hand to those who need it!</h1>
                     <p>Millions of families in America go hungry every year.</p>
                     <button className="btn-helpo">Donate Now</button>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="img-box">
                     <img src={banner} className="img-fluid rounded" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeBanner;