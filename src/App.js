import React from 'react';
import logo from './logo.svg';
import './App.css';
import introFrontLayer from './images/Intro_Front_Layer.svg';
import introBrain from './images/Intro_Brain.svg';
import featuredImageEmpty from './images/Intro_Featured_Image_Empty.svg';


function App() {
  return (
    <>

      <div className="main">
        <div className="row row2 header">
          <div className="row-inner">
            <div id="anchor-top" className="header-container">

              <div className="header-container-text">
                <div className="header-container-description">
                  <div className="header-container-title">
                    <div className="header-container-title-2">CORTEX</div>
                    <div className="header-container-title-3">COPYWRITER</div>
                  </div>
                  <div className="header-container-paragraph">
                    <p className="intro-title">Enhance your communications with psychology-based copywriting and UX writing</p>
                  </div>
                  <div className="header-container-cta">Send a message</div>
                </div>
              </div>

              <div className="header-container-image">
                <img src={introFrontLayer} className="header-front" alt=" " />
                <img src={featuredImageEmpty} alt=" " />
                <img src={introBrain} className="header-brain" alt=" " />
              </div>
            </div>
          </div>
          <div className="header-container-bg"></div>
        </div>
      </div>

    </>
  );
}

export default App;
