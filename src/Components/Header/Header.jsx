import React from "react";
import image1 from '../../images/carousel1.jpg'
import image2 from '../../images/carousel2.jpg'
import image3 from '../../images/carousel3.jpg'
import image4 from '../../images/carousel4.jpg'
import image5 from '../../images/carousel5.jpg'

import company1 from '../../images/ncdex.png'
import company2 from '../../images/nism.png'
import company3 from '../../images/nse.png'
import company4 from '../../images/mcx.png'
import company5 from '../../images/amfi.png'
import company6 from '../../images/bse.png'
import "../Header/Header.css";
import victorImage from '../../images/cartoon.png'
const Header = () => {
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner"> 
    <div class="carousel-item active">
      <img src={image5} class="d-block" width={'100%'} height={'100%'} alt='images1' />
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block" width={'100%'} height={'100%'} alt='images2' />
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block" width={'100%'} height={'100%'} alt='images3' />
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block" width={'100%'} height={'100%'} alt='images3' />
    </div>
    <div class="carousel-item">
      <img src={image4} class="d-block" width={'100%'} height={'100%'} alt='images3' />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="container">
          <p className="allheading mt-3 mb-5">
            Enligtitening The Minds Shaping The Future
          </p>
        <div className="row mt-5">
          <div className="col-md-8">
            <p className="desc">
              Trading <span color="green">Smart</span> Edge Institute
            </p>
            <p className="para">
              Trading Smart Edge Institute is a premier educational institution
              dedicated to empowering individuals with the knowledge and skills
              needed to excel in the financial markets. With a team of
              experienced traders and financial experts, the institute offers a
              comprehensive curriculum that covers a wide range of trading
              strategies, risk management techniques, and market analysis tools.
              Our courses are designed for traders of all levels, from beginners
              to seasoned professionals, providing practical insights and
              hands-on training to help students develop a smart, strategic edge
              in their trading endeavors. At Trading Smart Edge Institute, we
              are committed to fostering a learning environment that combines
              theoretical knowledge with real-world application, ensuring that
              our students are well-prepared to navigate the complexities of
              today's financial landscape and achieve their trading goals with
              confidence.
            </p>
          </div>
          <div className="col-md-4">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lh6Cz3mbuz0" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
<section className="container-fluid mt-5">
  <div className="row" style={{background:'white', alignItems:'center'}}>

    <div className="col-md-2 col-4">
      <img width='80%' src={company1} alt="" />
    </div>
    <div className="col-md-2 col-4">
      <img width='80%' src={company2} alt="" />
    </div>
    <div className="col-md-2 col-4">
      <img width='100%' src={company3} alt="" />
    </div>
    <div className="col-md-2 col-4">
      <img width='80%' src={company4} alt="" />
    </div>
    <div className="col-md-2 col-4">
      <img width='80%' src={company5} alt="" />
    </div>
    <div className="col-md-2 col-4">
      <img width='80%' src={company6} alt="" />
    </div>
  </div>
</section>
      <div>
        <div className="bgImage mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="heading">
                  BECOME A PROFITABLE TRADER WITH OUR EXPERT MENTOR'S
                </p>
                <h1 className="headingMain">
                LEARN STRATEGIES TO MAKE ACTUAL PROFIT FROM STOCK MARKET
                </h1>
              </div>
              <div className="col-md-6">
                <img width={'100%'} src={victorImage} alt="" />
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
