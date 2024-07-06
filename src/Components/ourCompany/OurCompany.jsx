import React from "react";
import Slider from "react-slick";
import google from "../../images/google.webp";
import justdial from "../../images/justdial.png";
import sulekha from "../../images/sulekha.png";
import linkedin from "../../images/linkedin.png";

const OurCompany = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ background: "white" }}>
      <div className="container">
        <section className="container-fluid companylogos">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="company_logo">
                
                  <img width={"100%"} src={google} alt="" />
                  <div className="star d-flex gap-2 justify-content-center">
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="company_logo">
                  <img width={"100%"} src={justdial} alt="" />
                    <div className="star d-flex gap-2 justify-content-center">
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="company_logo">
                  <img width={"100%"} src={sulekha} alt="" />
                    <div className="star d-flex gap-2 justify-content-center">
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="company_logo">
                  <img width={"90%"} src={linkedin} alt="" />
                    <div className="star d-flex gap-2 justify-content-center">
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurCompany;
