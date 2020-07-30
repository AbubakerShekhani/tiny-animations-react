import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
import introFrontLayer from './images/Intro_Front_Layer.svg';
import introBrain from './images/Intro_Brain.svg';
import featuredImageEmpty from './images/Intro_Featured_Image_Empty.svg';

const App = () => {

  let flickerKeyframes = [  { opacity: 0 },
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 },
    { opacity: 0 },
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 },
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 },
    { opacity: 0 },
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 },
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 },
   ];

  let brainbob = [
    { transform: 'translateY(10px) rotate(-20deg)' },
    { transform: 'translateY(-30px) rotate(0deg)' }
  ];

  const flickerAnimation = useWebAnimations({
    keyframes:  flickerKeyframes,
    timing: { duration: 1000, iterations: Infinity },
    opacity: 0,

  });

  const brainbobAnimation = useWebAnimations({
    keyframes:  brainbob,
    timing: {
      duration: 3000,
      direction:"alternate",
      iterations: Infinity,
      easing: 'ease-in-out'
    },

  });


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
                <img ref={flickerAnimation.ref} src={introFrontLayer} alt=" " />
                <img src={featuredImageEmpty} alt=" " />
                <img ref={brainbobAnimation.ref} src={introBrain} alt=" " />
              </div>
            </div>
          </div>
          <div className="header-container-bg"></div>
        </div>
        <div id="anchor-services" className="services service-outer-1">
          <div className="row row-service ">
            <div className="row-inner service-section-1" id="services">
              <div className="column column-left">
                <div className="service-image">
                    <img src={contentWriting} alt="Cortex Copywriter Content Writing Services" />
                </div>
              </div>
              <div className="column column-right">
                <h1>Content Writing</h1>
                <p>In this age of content overload, authentic connections are key for your brand to engage consumers and offer true value. By weaving your unique brand voice, values, story, identity and key messages through all your content and communications, I help your brand connect with fans to drive insights and sales. </p>
                <div className="taglist"></div>
              </div>
            </div>
          </div>

          <div className="row row-service ">
            <div className="row-inner service-section-2">
              <div className="column column-left ">
                <h1>UX Writing</h1>
                <p>My interdisciplinary approach ensures emotional connection and human-centered solutions for brands. UX writing breathes life into a product. It’s more than logins and placeholders. My job is to make people feel the humanity behind the touchscreen. I collaborate with design teams to write more than just an interaction. We write memorable journeys. </p>
                <div className="taglist"></div>
              </div>
              <div className="column column-right">
                <div className="service-image">
                  <img src={UXWriting} alt="Cortex Copywriter UX Writing Services" />
                </div>
              </div>
            </div>
          </div>

          <div className="row row-service ">
              <div className="row-inner service-section-3">
                  <div className="column column-left">
                      <div className="service-image">
                          <img src={websiteCopyrighting} alt="Cortex Copywriter Web Copywriting Services" />
                      </div>
                  </div>
                  <div className="column column-right">
                      <h1>Website Copywriting</h1>
                      <p>I’m on mission to help you increase website traffic and leads, reduce bounce rate and strengthen your brand. While my search engine optimized (SEO) copy will focus on satisfying Big Daddy Google, SEO will come secondary to writing for humans and making your content authoritative so it gains interactions, links and referrals.</p>
                      <div className="taglist"></div>
                  </div>
              </div>
          </div>


        </div>

      </div>
    </>
  );
}

export default App;
