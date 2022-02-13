import React from 'react';

const Feature = () => {
   return (
      <div className="feature">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>Our goal is to help poor people</h2>
                     <p className="mb-0">Helpo is the largest global crowdfunding.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <div className="feature-box">
                     <h1 className="number">01</h1>
                     <h3>Our Mission</h3>
                     <p className="mb-0">We see our mission in generating resources through fundraising initiatives and partnerships.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="feature-box box-2">
                     <h1 className="number">02</h1>
                     <h3>Our Vision</h3>
                     <p className="mb-0">We aim to grant wishes that will give hope to people in need in communities across the world.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mx-auto">
                  <div className="feature-box box-3">
                     <h1 className="number">03</h1>
                     <h3>Our Goal</h3>
                     <p className="mb-0">The goal of our organization is to  reduce the inequity in access to education & health care of children.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Feature;